<script setup>
import ProductCard from '@/entities/product/ui';
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
      title="glasses model 1"
      image-url="/img/products/glasses/1.webp"
      code="01-5"
      :price="22200.22"
      :isAdded="false"
      is-favorite=""
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClickAdd"
    />
    <ProductCard
      title="glasses model 1"
      image-url="/img/products/glasses/1.webp"
      code="01-5"
      :price="22200.22"
      :isAdded="false"
      is-favorite=""
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClickAdd"
    />
    <ProductCard
      title="glasses model 1"
      image-url="/img/products/glasses/1.webp"
      code="01-5"
      :price="22200.22"
      :isAdded="false"
      is-favorite=""
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClickAdd"
    />
    <ProductCard
      title="glasses model 1"
      image-url="/img/products/glasses/1.webp"
      code="01-5"
      :price="22200.22"
      :isAdded="false"
      is-favorite=""
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
