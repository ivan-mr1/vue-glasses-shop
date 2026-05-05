import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  fetchFavorites as apiFetchFavorites,
  addFavorite as apiAddFavorite,
  removeFavorite as apiRemoveFavorite,
} from '@/shared/api/favoriteApi';

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref([]);

  const fetchFavorites = async () => {
    try {
      favorites.value = await apiFetchFavorites();
    } catch (err) {
      console.error('Error loading data:', err.message);
    }
  };

  const addToFavorite = async (item) => {
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
    fetchFavorites,
    addToFavorite,
    hasItem,
  };
});
