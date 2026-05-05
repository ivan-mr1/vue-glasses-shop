<script setup>
import { onMounted } from 'vue';
import { useFavoriteStore } from '@/entities/favorite';
import HeaderBlock from '@/shared/ui/header-block/HeaderBlock.vue';
import ProductCatalog from '@/widgets/product-catalog';
import InfoBlock from '@/shared/ui/info-block';
import favoritesEmptyImg from '@/shared/assets/img/favorites-empty.png';

const favoriteStore = useFavoriteStore();

onMounted(async () => {
  await favoriteStore.fetchFavorites();
});
</script>

<template>
  <section id="favorites" class="page__favorites favorites" aria-labelledby="favorites-title">
    <div class="products__container">
      <HeaderBlock custom-class="favorites__header" id="favorites-title" title="Закладки" />

      <div v-if="favoriteStore.favoriteItems.length === 0" class="favorites__empty">
        <InfoBlock
          :image-url="favoritesEmptyImg"
          title="Закладок немає :("
          text="Ви нічого не додали в закладки"
        />
      </div>

      <ProductCatalog
        v-else
        :items="favoriteStore.favoriteItems"
        :is-loading="favoriteStore.isLoading"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.favorites {
  padding-top: calc(var(--header-height) + 10px);
  padding-bottom: 60px;

  &__empty {
    display: flex;
    justify-content: center;
    padding-top: 60px;
  }
}
</style>
