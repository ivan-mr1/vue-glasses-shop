<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue';
import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT } from '@/shared/api/config';
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

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`, { params });
    items.value = data;
  } catch (err) {
    console.error('Error loading data:', err.message);
  }
};

onMounted(fetchItems);

watch(filters, fetchItems);

usePageNavigation();
provide('items', items);
provide('onChangeSelect', onChangeSelect);
provide('onChangeSearchInput', onChangeSearchInput);
</script>

<template>
  <Home />
</template>
