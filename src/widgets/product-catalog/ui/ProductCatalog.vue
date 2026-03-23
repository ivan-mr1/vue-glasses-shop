<script setup>
import ProductCard from '@/entities/product/ui';

defineProps({
  items: Array,
});

const onClickAdd = () => {
  alert('add');
};
const onClickFavorite = () => {
  alert('fav');
};
</script>
<template>
  <ul class="products__list" data-products-catalog>
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :code="item.code"
      :price="item.price"
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClickAdd"
    />
  </ul>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.products {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;

    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  }
}
</style>
