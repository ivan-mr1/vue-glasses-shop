<script setup>
import { onMounted, ref } from 'vue';
import { fetchFavoritesWithRelations } from '@/shared/api/favoriteApi';
import HeaderBlock from '@/shared/ui/header-block/HeaderBlock.vue';
import ProductCatalog from '@/widgets/product-catalog';

const favorites = ref([]);

onMounted(async () => {
  try {
    const data = await fetchFavoritesWithRelations();
    favorites.value = data.map((obj) => obj.item);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <section id="favorites" class="page__favorites favorites" aria-labelledby="favorites-title">
    <div class="products__container">
      <HeaderBlock custom-class="favorites__header" id="favorites-title" title="Закладки" />
      <ProductCatalog :items="favorites" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
