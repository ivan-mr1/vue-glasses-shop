<script setup>
import { RouterView } from 'vue-router';
import Drawer from '@/widgets/drawer';
import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
import './styles/main.scss';
import { computed, provide, ref, watch } from 'vue';

const isDrawerOpen = ref(false);

const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const cart = ref([]);

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0));
const discount = computed(() => Math.round((totalPrice.value * 5) / 100));
const finishPrice = computed(() => Math.round(totalPrice.value - discount.value));

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

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
