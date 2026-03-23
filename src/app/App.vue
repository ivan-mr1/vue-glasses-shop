<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue';
import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT, FAVORITES_ENDPOINT } from '@/shared/api/config';
import { usePageNavigation } from '@/shared/hooks/usePageNavigation';
import Home from '@/pages/home-page';
import './styles/main.scss';

const items = ref([]);

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
});

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value;
};

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`${BASE_URL}${FAVORITES_ENDPOINT}`);
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id);

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });
  } catch (err) {
    console.error('Error loading data:', err.message);
  }
};

const addToFavorite = async (item) => {
  item.isFavorite = !item.isFavorite;
  console.log(item);
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`, { params });
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
    }));
  } catch (err) {
    console.error('Error loading data:', err.message);
  }
};

onMounted(async () => {
  await fetchItems();
  await fetchFavorites();
});

watch(filters, fetchItems);

usePageNavigation();
provide('items', items);
provide('onChangeSelect', onChangeSelect);
provide('onChangeSearchInput', onChangeSearchInput);
provide('addToFavorite', addToFavorite);
</script>

<template>
  <Home />
</template>
