<script setup>
import Button from '@/shared/ui/form/button';

defineProps({
  title: String,
  isAdded: Boolean,
  onClickAdd: Function,
});
</script>

<template>
  <Button
    class="button--card product__btn"
    :in-cart="isAdded"
    :aria-label="isAdded ? `Товар ${title} вже у кошику` : `Додати у кошик товар: ${title}`"
    @click.stop="onClickAdd"
  >
    {{ isAdded ? 'У кошику' : 'Купити' }}
  </Button>
</template>
