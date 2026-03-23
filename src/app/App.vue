<script setup>
import { onMounted, provide, ref, watch } from 'vue';
import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT } from '@/shared/api/config';
import { usePageNavigation } from '@/shared/hooks/usePageNavigation';
import Home from '@/pages/home-page';
import './styles/main.scss';
// перенести сюда импорт router

const items = ref([]);
const sortBy = ref('');
// const searchQuery = ref('');

const onChangeSelect = (event) => {
  console.log(event.target.value);
  sortBy.value = event.target.value;
};

onMounted(async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`);
    items.value = data;
    console.log('Data loaded successfully:', items.value);
  } catch (err) {
    console.error('Error loading data:', err.message);
  }
});

watch(sortBy, async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}?sortBy=${sortBy.value}`);
    items.value = data;
    console.log('Data sort loaded successfully:', items.value);
  } catch (err) {
    console.error('Error loading data sort:', err.message);
  }
});

usePageNavigation();
provide('items', items);
provide('onChangeSelect', onChangeSelect);
</script>

<template>
  <Home />
</template>
