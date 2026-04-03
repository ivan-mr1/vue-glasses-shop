<script setup>
import { inject } from 'vue';
import { CartButtonIcon } from '@/shared/ui/icons';

const { openDrawer } = inject('cart');
const finishPrice = inject('finishPrice');
</script>

<template>
  <button
    type="button"
    class="header__action"
    aria-label="Open cart"
    title="Open cart"
    @click="() => openDrawer()"
  >
    <span class="counter-icon">
      <CartButtonIcon />
      <span class="counter-icon__count">{{ finishPrice }} грн</span>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
