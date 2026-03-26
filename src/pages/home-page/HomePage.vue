<script setup>
import { inject, reactive, watch, ref, onMounted, provide } from 'vue';
import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT, FAVORITES_ENDPOINT } from '@/shared/api/config';
import debounce from '@/shared/utils/debounce';
import HeroHomePage from './sections/HeroHomePage.vue';
import AboutHomePage from './sections/AboutHomePage.vue';
import PartnersHomePage from './sections/PartnersHomePage.vue';
import ProductsHomePage from './sections/ProductsHomePage.vue';

const { cart, addToCart, removeFromCart } = inject('cart');

const items = ref([]);

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
});

const onClickAddCart = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
};

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value;
}, 350);

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
        item, // убрать строку, если будет работать на сервере ?_relations=products
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

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`${BASE_URL}${FAVORITES_ENDPOINT}`);
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id);

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
  const localCart = localStorage.getItem('cart');
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }));
});

// очищаем все кнопки "Купить"
watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }));
});

watch(filters, fetchItems);

provide('items', items);
provide('onChangeSelect', onChangeSelect);
provide('onChangeSearchInput', onChangeSearchInput);
provide('addToFavorite', addToFavorite);
provide('onClickAddCart', onClickAddCart);
</script>

<template>
  <main class="page">
    <HeroHomePage />
    <AboutHomePage />
    <PartnersHomePage />
    <ProductsHomePage />
  </main>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
