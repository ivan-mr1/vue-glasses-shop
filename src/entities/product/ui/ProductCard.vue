<script setup>
import Button from '@/shared/ui/form/button';
import { IconFavorite } from '@/shared/ui/icons';
import { formatPrice } from '@/shared/utils/formatPrice';

defineProps({
  id: Number,
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
  <li>
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
            <IconFavorite />
          </button>

          <h3 class="product__title">
            <a href="/card.html?id=1" target="_blank" class="product__main-link">
              {{ title }}
            </a>
          </h3>

          <div class="product__descr">
            <p>{{ description }}</p>
          </div>

          <div class="product__code">Код: {{ code }}</div>

          <div class="product__price product-price">
            <div class="product__price-current">{{ formatPrice(price) }} грн</div>
          </div>

          <Button
            class="button--card product__btn"
            :in-cart="isAdded"
            :aria-label="isAdded ? `Товар ${title} вже у кошику` : `Додати у кошик товар: ${title}`"
            @click.stop="onClickAdd"
          >
            {{ isAdded ? 'У кошику' : 'Купити' }}</Button
          >
        </div>
      </div>
    </article>
  </li>
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
  &__code {
    font-size: 14px;
    color: #666666;
  }

  &__price {
    margin-top: auto;
    font-size: fluid(22, 18);
    font-weight: 600;
  }
}
</style>
