<script setup>
import { inject } from 'vue';

const { openDrawer } = inject('drawerActions');
</script>

<template>
  <div class="header__actions">
    <button
      type="button"
      class="header__action"
      aria-label="Open cart"
      title="Open cart"
      @click="() => openDrawer()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 29">
        <path
          d="M26.1 19.9H7.9C5.3 19.9 3.7 18.1 3.3 16.3C3 15.2 0.7 7.1 0 4.9C-0.1 4.6 0.1 4.3 0.4 4.3H30V6.3H2.5C3.3 8.9 5 14.8 5.2 15.9C5.4 16.8 6.3 17.9 7.9 17.9H26.1V19.9Z"
          fill="#FFA501"
        ></path>
        <path
          d="M24.6 24.8L23 23.7C23.2 23.4 23.4 23.1 23.5 22.7C24 21.2 27.5 8.8 29 3.5C29.5 1.4 31.3 0 33.5 0H34.7C34.8 0 35 0.2 35 0.3V1.6C35 1.8 34.8 2 34.7 2H33.5C32.3 2 31.2 2.8 30.9 4C29.4 9.3 25.9 21.8 25.4 23.4C25.2 23.9 24.9 24.4 24.6 24.8Z"
          fill="#FFA501"
        ></path>
        <path d="M20.5 25H8.4V27H20.5V25Z" fill="#FFA501"></path>
        <path
          d="M6 29C4.3 29 3 27.6 3 26C3 24.3 4.4 23 6 23C7.7 23 9 24.4 9 26C9 27.6 7.7 29 6 29Z"
          fill="#FFA501"
        ></path>
        <path
          d="M22.6 29C20.9 29 19.6 27.6 19.6 26C19.6 24.3 21 23 22.6 23C24.3 23 25.6 24.4 25.6 26C25.6 27.6 24.3 29 22.6 29Z"
          fill="#FFA501"
        ></path>
      </svg>
    </button>
    <a href="/" class="header__action" aria-label="Open favorite" title="Open favorite">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 29">
        <path
          fill="#ffa501"
          d="M16 29c-.5 0-1-.2-1.4-.5C11.2 25.5 0 15.2 0 8.9 0 4 3.9 0 8.6 0c3.1 0 5.9 1.7 7.4 4.3C17.5 1.7 20.3 0 23.4 0 28.1 0 32 4 32 8.9c0 6.3-11.2 16.6-14.6 19.6-.4.3-.9.5-1.4.5M8.6 2C5 2 2 5.1 2 8.9 2 13.3 9.5 21.4 15.9 27h.1c6.5-5.6 14-13.7 14-18.1C30 5.1 27 2 23.4 2c-2.7 0-5.1 1.7-6.1 4.3-.2.3-.5.7-1.3.7-.7 0-1.1-.2-1.3-.7-1-2.6-3.4-4.3-6.1-4.3"
        ></path>
      </svg>
    </a>
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
