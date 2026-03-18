<script setup>
import Cart from '@/features/cart/Cart.vue';
import Favorite from '@/features/favorite/Favorite.vue';
</script>

<template>
  <div class="header__actions">
    <Favorite />
    <Cart />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
.header {
  &__actions {
    position: relative;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: rem(16);
  }

  &__action {
    --size: #{rem(40)};

    @include square(var(--size));
  }
}
</style>
