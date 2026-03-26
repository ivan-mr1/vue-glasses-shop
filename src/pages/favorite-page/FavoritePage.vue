<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT, FAVORITES_ENDPOINT } from '@/shared/api/config';
import HeaderBlock from '@/shared/ui/header-block/HeaderBlock.vue';
import ProductCatalog from '@/widgets/product-catalog/ui/ProductCatalog.vue';

const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${FAVORITES_ENDPOINT}?_relations=${PRODUCTS_ENDPOINT}`,
    );
    favorites.value = data.map((obj) => obj.item);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <main class="page">
    <section id="favorites" class="page__favorites favorites" aria-labelledby="favorites-title">
      <div class="products__container">
        <HeaderBlock custom-class="favorites__header" id="favorites-title" title="Закладки" />
        <ProductCatalog :items="favorites" />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
