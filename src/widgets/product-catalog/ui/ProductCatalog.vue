<script setup>
import ProductCard from '@/entities/product';
import { AddToCartButton } from '@/features/add-to-cart';
import { ToggleFavoriteButton } from '@/features/toggle-favorite';

defineProps({
  items: Array,
});
</script>

<template>
  <ul class="products__list" data-products-catalog>
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :description="item.description"
      :code="item.code"
      :price="item.price"
    >
      <template #favorite>
        <ToggleFavoriteButton :item="item" />
      </template>

      <template #actions>
        <AddToCartButton :item="item" />
      </template>
    </ProductCard>
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
