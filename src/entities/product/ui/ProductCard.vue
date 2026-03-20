<script setup>
import { formatPrice } from '@/shared/utils/formatPrice';

defineProps({
  title: String,
  imageUrl: String,
  description: String,
  code: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
});
</script>

<template>
  <article class="product">
    <div class="product__inner">
      <div class="product__image ibg" aria-hidden="true">
        <img :src="imageUrl" alt="" width="285" height="215" loading="lazy" />
      </div>

      <div class="product__bottom">
        <button
          @click.stop="onClickFavorite"
          type="button"
          class="product__favorite"
          :class="{ 'is-active': isFavorite }"
          :aria-label="
            isFavorite ? `Видалити з обраного: ${title}` : `Додати до обраного: ${title}`
          "
        >
          <svg width="24" height="21" fill="none" aria-hidden="true">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12 18.023c-4.64-2.635-7.236-5.26-8.493-7.55C2.224 8.138 2.33 6.156 3.052 4.74c1.478-2.9 5.684-3.828 8.242-.593l.705.893.707-.893c2.558-3.235 6.764-2.307 8.242.593.721 1.415.827 3.398-.456 5.735-1.257 2.289-3.852 4.914-8.492 7.549zm0-15.778C8.52-1.144 3.337.215 1.448 3.922.42 5.939.4 8.555 1.93 11.34c1.517 2.763 4.548 5.69 9.634 8.502l.436.24.435-.24c5.086-2.811 8.118-5.74 9.635-8.502 1.53-2.785 1.51-5.4.482-7.418C20.662.215 15.48-1.144 12 2.245"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <h3 class="product__title">
          <a href="/card.html?id=1" target="_blank" class="product__main-link">
            {{ title }}
          </a>
        </h3>

        <div class="product__descr">
          <p>{{ description }}</p>
        </div>

        <div class="product__article">Артикул: {{ code }}</div>

        <div class="product__price product-price">
          <div class="product__price-current">{{ formatPrice(price) }} грн</div>
        </div>

        <button
          @click.stop="onClickAdd"
          type="button"
          class="button button--card product__btn"
          :aria-label="`Додати у кошик товар: ${title}`"
        >
          {{ isAdded ? 'У кошику' : 'Купити' }}
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.product {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--color-white);
  transition: box-shadow 0.3s ease;

  @include hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    .product__title {
      color: var(--color-orange);
    }
  }
  &__main-link {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }

  &__title,
  &__btn,
  &__favorite {
    position: relative;
    z-index: 2;
  }

  &__bottom {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: fluid(15, 10);
  }

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

  &__title {
    font-size: fluid(20, 18);
    font-weight: 600;
    line-height: 1.3;
    color: var(--color-black);
  }

  &__descr,
  &__article {
    font-size: 14px;
    color: #666666;
  }

  &__price {
    margin-top: auto;
    font-size: fluid(22, 18);
    font-weight: 600;
  }
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  padding-block: rem(12);
  padding-inline: rem(25);
  font-weight: 600;
  color: var(--color-white);
  background-color: transparent;
  border: 1px solid var(--color-white);
  border-radius: var(--border-radius);
  text-decoration: none;

  &:active:not(.is-disabled) {
    scale: 1.05;
  }

  @include hover {
    &:not(.is-disabled) {
      color: var(--color-orange);
      border: 1px solid var(--color-orange);
    }
  }

  &--card {
    padding: fluid(12, 10);
    color: var(--color-black);
    border: 1px solid var(--color-orange);

    &.is-in-cart {
      color: var(--color-black);
      background-color: var(--color-orange);
      cursor: default;
    }
  }
}
</style>
