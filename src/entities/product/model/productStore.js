import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';
import { fetchProducts } from '@/shared/api/productApi';

export const useProductStore = defineStore('product', () => {
  const allItems = ref([]);
  const filters = reactive({
    sortBy: 'title',
    searchQuery: '',
    page: 1,
    limit: 16,
  });

  const items = computed(() => {
    const start = (filters.page - 1) * filters.limit;
    const end = start + filters.limit;
    return allItems.value.slice(start, end);
  });

  const totalItems = computed(() => allItems.value.length);

  const fetchItems = async () => {
    try {
      const params = {
        sortBy: filters.sortBy,
      };

      if (filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`;
      }

      const data = await fetchProducts(params);
      allItems.value = data;
    } catch (err) {
      console.error('Error loading data:', err.message);
    }
  };

  const setPage = (page) => {
    filters.page = page;
  };

  const setSortBy = (sortBy) => {
    filters.sortBy = sortBy;
    filters.page = 1;
  };

  const setSearchQuery = (query) => {
    filters.searchQuery = query;
    filters.page = 1;
  };

  return {
    items,
    totalItems,
    filters,
    fetchItems,
    setPage,
    setSortBy,
    setSearchQuery,
  };
});
