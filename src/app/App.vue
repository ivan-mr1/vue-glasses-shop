<script setup>
import { onMounted, provide, ref } from 'vue';
import { fetchProducts } from '@/entities/product/api';
import { usePageNavigation } from '@/shared/hooks/usePageNavigation';
import Home from '@/pages/home-page';
import './styles/main.scss';
// перенести сюда импорт router

const items = ref([]);

const loadData = async () => {
  try {
    items.value = await fetchProducts();
    console.log('Data loaded successfully:', items.value);
  } catch (err) {
    console.error('Error loading data:', err.message);
  }
};

onMounted(loadData);

usePageNavigation();
provide('items', items);
</script>

<template>
  <Home />
</template>
