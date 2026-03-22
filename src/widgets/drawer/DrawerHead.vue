<script setup>
import HeaderBlock from '@/shared/ui/header-block';
</script>

<template>
  <div class="drawer__head">
    <HeaderBlock title="Кошик" />
    <button type="button" class="drawer__close" aria-label="Close drawer" title="Close drawer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 10L10 30"
          stroke="#181C29"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 10L30 30"
          stroke="#181C29"
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
  }
}
</style>
