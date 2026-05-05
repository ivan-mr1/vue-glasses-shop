import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  fetchFavoritesWithRelations as apiFetchFavorites,
  addFavorite as apiAddFavorite,
  removeFavorite as apiRemoveFavorite,
} from '@/shared/api/favoriteApi';

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const favoriteItems = computed(() => favorites.value.map((fav) => fav.item));

  const fetchFavorites = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      favorites.value = await apiFetchFavorites();
    } catch (err) {
      error.value = 'Не вдалося завантажити закладки.';
      console.error('Error loading data:', err.message);
    } finally {
      isLoading.value = false;
    }
  };

  const toggleFavorite = async (item) => {
    try {
      const isFavorite = hasItem(item.id);

      if (!isFavorite) {
        const data = await apiAddFavorite(item);
        favorites.value.push(data);
        return data;
      } else {
        const favoriteItem = favorites.value.find((fav) => fav.item_id === item.id);
        if (favoriteItem) {
          await apiRemoveFavorite(favoriteItem.id);
          favorites.value = favorites.value.filter((fav) => fav.id !== favoriteItem.id);
        }
      }
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  const hasItem = (itemId) => favorites.value.some((fav) => fav.item_id === itemId);

  return {
    favorites,
    favoriteItems,
    isLoading,
    error,
    fetchFavorites,
    toggleFavorite,
    hasItem,
  };
});
