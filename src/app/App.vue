<script setup>
import Home from '@/pages/home-page';
import Drawer from '@/widgets/drawer/Drawer.vue';
import './styles/main.scss';
/* ======= вынести из App.vue */
import { computed, onMounted, provide, reactive, ref, watch } from 'vue';
import axios from 'axios';
import {
  BASE_URL,
  PRODUCTS_ENDPOINT,
  FAVORITES_ENDPOINT,
  ORDERS_ENDPOINT,
} from '@/shared/api/config';

/* ===== drawer */
const isDrawerOpen = ref(false);

const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};
/* ===== */

const items = ref([]);
const cart = ref([]);
const isCreatingOrder = ref(false);

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
});
/* ===== */
const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0));
const discount = computed(() => Math.round((totalPrice.value * 5) / 100));
const finishPrice = computed(() => Math.round(totalPrice.value - discount.value));
/* ===== */
const cartIsEmpty = computed(() => cart.value.length === 0);

const cartButtonDidabled = computed(() => isCreatingOrder.value || cartIsEmpty.value);

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

const createOrder = async () => {
  //  отправка заказа на сервер, очистка массива корзины
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(`${BASE_URL}${ORDERS_ENDPOINT}`, {
      items: cart.value,
      finishPrice: finishPrice.value,
    });

    cart.value = [];

    return data;
  } catch (err) {
    console.error('Error loading data:', err);
  } finally {
    isCreatingOrder.value = false;
  }
};

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
  const localCart = localStorage.getItem('cart');
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }));
});

watch(filters, fetchItems);

// очищаем все кнопки "Купить"
watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }));
});

// любое изменение корзины сохраняется в localStorage
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  },
  { deep: true },
);

provide('items', items);
provide('onChangeSelect', onChangeSelect);
provide('onChangeSearchInput', onChangeSearchInput);
provide('addToFavorite', addToFavorite);
provide('onClickAddCart', onClickAddCart);
provide('cart', { cart, openDrawer, closeDrawer, addToCart, removeFromCart });
provide('totalPrice', totalPrice);
provide('discount', discount);
provide('finishPrice', finishPrice);
provide('createOrder', createOrder);
provide('isCreatingOrder', isCreatingOrder);
provide('cartButtonDidabled', cartButtonDidabled);
/* ======= вынести из App.vue */
</script>

<template>
  <Home />
  <Drawer :is-active="isDrawerOpen" />
</template>
