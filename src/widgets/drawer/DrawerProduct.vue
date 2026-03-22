<script setup>
import { formatPrice } from '@/shared/utils/formatPrice';
defineProps({
  title: String,
  imageUrl: String,
  code: String,
  price: Number,
});
</script>

<template>
  <article class="drawer__product product-drawer">
    <div class="product-drawer__image">
      <img
        :src="imageUrl"
        alt=""
        width="73"
        height="50"
        class="product-drawer__img"
        loading="lazy"
      />
    </div>

    <div class="product-drawer__wrapper">
      <h3 class="product-drawer__title">{{ title }}</h3>

      <div class="product-drawer__inner">
        <div class="product-drawer__descr">
          <div class="product-drawer__code">Код: {{ code }}</div>
          <div class="product-drawer__price">{{ formatPrice(price) }} грн</div>
        </div>
        <button
          type="button"
          class="product-drawer__close"
          aria-label="Delete product"
          title="Delete product"
        >
          <svg
            width="20"
            height="20"
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
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.product-drawer {
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--color-orange);
  padding: 2px;
  border-radius: 5px;
  overflow: hidden;
  &__image {
    flex: 0 1 25%;
  }

  &__wrapper {
    flex: 0 1 75%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__descr {
    font-size: 14px;
  }

  &__title {
    font-weight: 600;
  }

  &__price {
    font-weight: 600;
    font-style: italic;
  }
}
</style>
