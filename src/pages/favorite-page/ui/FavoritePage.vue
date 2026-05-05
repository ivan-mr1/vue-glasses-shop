<script setup>
import { onMounted } from 'vue';
import { useFavoriteStore } from '@/entities/favorite';
import HeaderBlock from '@/shared/ui/header-block/HeaderBlock.vue';
import ProductCatalog from '@/widgets/product-catalog';

const favoriteStore = useFavoriteStore();

onMounted(async () => {
  await favoriteStore.fetchFavorites();
});
</script>

<template>
  <section id="favorites" class="page__favorites favorites" aria-labelledby="favorites-title">
    <div class="products__container">
      <HeaderBlock custom-class="favorites__header" id="favorites-title" title="Закладки" />
      <ProductCatalog :items="favoriteStore.favoriteItems" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.favorites {
  padding-top: calc(var(--header-height) + 10px);
}
</style>
