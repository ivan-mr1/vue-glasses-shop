<script setup>
import DrawerProduct from './DrawerProduct.vue';

const items = [
  {
    id: 1,
    title: 'glasses model 1',
    imageUrl: '/img/products/glasses/1.webp',
    code: '01-5',
    price: 22200.22,
  },
  {
    id: 2,
    title: 'glasses model 2',
    imageUrl: '/img/products/glasses/2.webp',
    code: '01-1',
    price: 22770.22,
  },
  {
    id: 1,
    title: 'glasses model 1',
    imageUrl: '/img/products/glasses/1.webp',
    code: '01-5',
    price: 22200.22,
  },
  {
    id: 2,
    title: 'glasses model 2',
    imageUrl: '/img/products/glasses/2.webp',
    code: '01-1',
    price: 22770.22,
  },
  {
    id: 1,
    title: 'glasses model 1',
    imageUrl: '/img/products/glasses/1.webp',
    code: '01-5',
    price: 22200.22,
  },
  {
    id: 2,
    title: 'glasses model 2',
    imageUrl: '/img/products/glasses/2.webp',
    code: '01-1',
    price: 22770.22,
  },
  {
    id: 1,
    title: 'glasses model 1',
    imageUrl: '/img/products/glasses/1.webp',
    code: '01-5',
    price: 22200.22,
  },
  {
    id: 2,
    title: 'glasses model 2',
    imageUrl: '/img/products/glasses/2.webp',
    code: '01-1',
    price: 22770.22,
  },
];
</script>

<template>
  <ul class="drawer__list">
    <DrawerProduct
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :code="item.code"
      :price="item.price"
      @remove="() => {}"
    />
  </ul>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.drawer {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding-inline: 5px;

    flex-grow: 1;
    overflow-y: auto;
    min-height: 0;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-orange);
      border-radius: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--color-orange) transparent;
  }
}
</style>
