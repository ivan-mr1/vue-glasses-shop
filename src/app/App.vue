<script setup>
import { RouterView } from 'vue-router';
import Drawer from '@/widgets/drawer';
import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
import './styles/main.scss';
/* ======= вынести из App.vue */
import { computed, provide, ref, watch } from 'vue';
import axios from 'axios';
import { BASE_URL, ORDERS_ENDPOINT } from '@/shared/api/config';

const cart = ref([]);
const isCreatingOrder = ref(false);
const isDrawerOpen = ref(false);

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0));
const discount = computed(() => Math.round((totalPrice.value * 5) / 100));
const finishPrice = computed(() => Math.round(totalPrice.value - discount.value));
const cartIsEmpty = computed(() => cart.value.length === 0);

const cartButtonDidabled = computed(() => isCreatingOrder.value || cartIsEmpty.value);

const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

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

// любое изменение корзины сохраняется в localStorage
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  },
  { deep: true },
);

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
  <div class="wrapper">
    <Header />
    <RouterView />
    <Drawer :is-active="isDrawerOpen" />
    <Footer />
    <ScrollUpButton />
  </div>
</template>
