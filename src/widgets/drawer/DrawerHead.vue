<script setup>
import HeaderBlock from '@/shared/ui/header-block';
import { useCartStore } from '@/entities/cart/model/cartStore';

const cartStore = useCartStore();
</script>

<template>
  <div class="drawer__head">
    <HeaderBlock title="Кошик" />

    <button
      type="button"
      class="drawer__close"
      aria-label="Close drawer"
      title="Close drawer"
      @click="() => cartStore.closeDrawer()"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 10L10 30"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 10L30 30"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.drawer {
  &__head {
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #181c29;
    transition:
      color 0.3s ease,
      transform 0.3s ease;

    @include hover {
      color: var(--color-orange);
      transform: rotate(90deg);
    }

    &:active {
      transform: rotate(90deg) scale(0.9);
    }

    svg {
      display: block;
      width: rem(40);
      height: rem(40);
    }
  }
}
</style>
