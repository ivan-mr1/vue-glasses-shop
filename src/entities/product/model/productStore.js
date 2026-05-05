import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { fetchProducts } from '@/shared/api/productApi';

export const useProductStore = defineStore('product', () => {
  const items = ref([]);
  const filters = reactive({
    sortBy: 'title',
    searchQuery: '',
  });

  const fetchItems = async () => {
    try {
      const params = {
        sortBy: filters.sortBy,
      };

      if (filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`;
      }

      const data = await fetchProducts(params);
      items.value = data;
    } catch (err) {
      console.error('Error loading data:', err.message);
    }
  };

  const setSortBy = (sortBy) => {
    filters.sortBy = sortBy;
  };

  const setSearchQuery = (query) => {
    filters.searchQuery = query;
  };

  return {
    items,
    filters,
    fetchItems,
    setSortBy,
    setSearchQuery,
  };
});
