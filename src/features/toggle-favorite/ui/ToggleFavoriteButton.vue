<script setup>
import { IconFavorite } from '@/shared/ui/icons';

defineProps({
  title: String,
  isFavorite: Boolean,
  onClickFavorite: Function,
});
</script>

<template>
  <button
    @click.stop="onClickFavorite"
    type="button"
    class="product__favorite"
    :class="{ 'is-active': isFavorite }"
    :aria-label="isFavorite ? `Видалити з обраного: ${title}` : `Додати до обраного: ${title}`"
  >
    <IconFavorite />
  </button>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.product {
  &__favorite {
    position: absolute;
    z-index: 5;
    top: 15px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: var(--color-orange);
    background-color: var(--color-white);
    border: 1px solid #eeeeee;
    border-radius: 50%;
    transition: all 0.3s ease;

    svg {
      transition: transform 0.3s ease;
    }

    &.is-active {
      color: var(--color-white);
      background-color: var(--color-orange);
      border-color: var(--color-orange);
    }

    @include hover {
      transform: scale(1.1);

      &:not(.is-active) {
        background-color: #fff9f5;
      }
    }
  }
}
</style>
