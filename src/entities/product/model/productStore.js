import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';
import { fetchProducts } from '@/shared/api/productApi';

export const useProductStore = defineStore('product', () => {
  const allItems = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
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
    isLoading.value = true;
    error.value = null;
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
      error.value = "Не вдалося завантажити товари. Перевірте з'єднання з інтернетом.";
      console.error('Error loading data:', err.message);
    } finally {
      isLoading.value = false;
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
    isLoading,
    error,
    filters,
    fetchItems,
    setPage,
    setSortBy,
    setSearchQuery,
  };
});
