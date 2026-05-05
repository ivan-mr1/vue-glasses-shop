<script setup>
import { OpenCartButton } from '@/features/cart';
import { OpenFavoritesButton } from '@/features/favorite';
</script>

<template>
  <div class="header__actions">
    <OpenCartButton />
    <OpenFavoritesButton />
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
