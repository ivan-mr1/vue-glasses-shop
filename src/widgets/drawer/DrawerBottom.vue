<script setup>
import Button from '@/shared/ui/form/button';
import { formatPrice } from '@/shared/utils/formatPrice';

defineProps({
  totalPrice: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  isSubmitting: { type: Boolean, default: false }, // для лоадера на кнопке
});
</script>

<template>
  <div class="drawer__bottom bottom-drawer">
    <div class="bottom-drawer__info">
      <div class="bottom-drawer__item">
        <span class="bottom-drawer__label">Усього:</span>
        <span class="bottom-drawer__value">{{ formatPrice(totalPrice) }} грн</span>
      </div>

      <div class="bottom-drawer__item" v-if="discount > 0">
        <span class="bottom-drawer__label">Знижка:</span>
        <span class="bottom-drawer__value bottom-drawer__value--discount">
          -{{ formatPrice(discount) }} грн
        </span>
      </div>
    </div>

    <Button class="button--card" :disabled="totalPrice === 0 || isSubmitting">
      Оформити замовлення
    </Button>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.bottom-drawer {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--color-orange, #eeeeee);
  background-color: var(--color-white);

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__item {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0.5rem;

    &::after {
      content: '';
      flex-grow: 1;
      order: 2;
      border-bottom: 1px dotted #cccccc;
      margin-bottom: 0.3rem;
    }
  }

  &__label {
    order: 1;
    font-size: 1rem;
    color: var(--color-black);
  }

  &__value {
    order: 3;
    font-weight: 700;
    font-size: 1.1rem;

    &--discount {
      color: #ff4d4d;
    }
  }
}
</style>
