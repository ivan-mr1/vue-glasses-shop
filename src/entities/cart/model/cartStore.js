import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { createOrder as apiCreateOrder } from '@/shared/api/orderApi';

export const useCartStore = defineStore('cart', () => {
  const localCart = localStorage.getItem('cart');
  const cart = ref(localCart ? JSON.parse(localCart) : []);
  const isDrawerOpen = ref(false);
  const isCreatingOrder = ref(false);
  const orderId = ref(null);

  const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0));
  const discount = computed(() => Math.round((totalPrice.value * 5) / 100));
  const finishPrice = computed(() => Math.round(totalPrice.value - discount.value));
  const cartIsEmpty = computed(() => cart.value.length === 0);

  const openDrawer = () => {
    isDrawerOpen.value = true;
  };

  const closeDrawer = () => {
    isDrawerOpen.value = false;
  };

  const addToCart = (item) => {
    if (!cart.value.find((cartItem) => cartItem.id === item.id)) {
      cart.value.push(item);
    }
  };

  const removeFromCart = (item) => {
    cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
  };

  const hasItem = (id) => cart.value.some((item) => item.id === id);

  const createOrder = async () => {
    try {
      isCreatingOrder.value = true;
      const data = await apiCreateOrder(cart.value, finishPrice.value);
      cart.value = [];
      orderId.value = data.id;
    } catch (err) {
      console.error('Error loading data:', err);
    } finally {
      isCreatingOrder.value = false;
    }
  };

  watch(
    cart,
    () => {
      localStorage.setItem('cart', JSON.stringify(cart.value));
    },
    { deep: true },
  );

  return {
    cart,
    isDrawerOpen,
    isCreatingOrder,
    orderId,
    totalPrice,
    discount,
    finishPrice,
    cartIsEmpty,
    openDrawer,
    closeDrawer,
    addToCart,
    removeFromCart,
    hasItem,
    createOrder,
  };
});
