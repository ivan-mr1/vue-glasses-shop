<script setup>
import Home from '@/pages/home-page';
import './styles/main.scss';
/* ======= вынести из App.vue */
import { onMounted, provide, reactive, ref, watch } from 'vue';
import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT, FAVORITES_ENDPOINT } from '@/shared/api/config';
import Drawer from '@/widgets/drawer/Drawer.vue';

/* ===== */
const isDrawerOpen = ref(false);

const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

provide('drawerActions', { openDrawer, closeDrawer });
/* ===== */

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
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id,
      };
      item.isFavorite = true;
      const { data } = await axios.post(`${BASE_URL}${FAVORITES_ENDPOINT}`, obj);
      item.favoriteId = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(`${BASE_URL}${FAVORITES_ENDPOINT}/${item.favoriteId}`);
      item.favoriteId = null;
    }
  } catch (err) {
    console.error('Error loading data:', err);
  }
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
      favoriteId: null,
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
provide('items', items);
provide('onChangeSelect', onChangeSelect);
provide('onChangeSearchInput', onChangeSearchInput);
provide('addToFavorite', addToFavorite);
/* ======= вынести из App.vue */
</script>

<template>
  <Home />
  <Drawer :is-active="isDrawerOpen" :total-price="0" :discount="0" />
</template>
