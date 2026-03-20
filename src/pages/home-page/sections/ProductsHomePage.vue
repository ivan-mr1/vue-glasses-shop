<script setup>
import HeaderBlock from '@/shared/ui/header-block';
import ProductCatalog from '@/widgets/product-catalog/ui';
</script>
<template>
  <section id="products" class="page__products products" aria-labelledby="products-title">
    <div class="products__container">
      <HeaderBlock custom-class="products__header" id="products-title" title="Каталог" />
      <ProductCatalog />
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.products {
  @include adaptive-clamp('padding-top', 120, 80);
  @include adaptive-clamp('padding-bottom', 60, 20);

  &__header {
    &:not(:last-child) {
      margin-bottom: rem(40);
    }
  }
}
</style>
