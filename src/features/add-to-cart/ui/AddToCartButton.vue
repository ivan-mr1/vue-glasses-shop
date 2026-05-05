<script setup>
import { inject } from 'vue';
import Button from '@/shared/ui/form/button';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const onClickAddCart = inject('onClickAddCart', () => {});
</script>

<template>
  <Button
    class="button--card"
    :in-cart="item.isAdded"
    :aria-label="
      item.isAdded ? `Товар ${item.title} вже у кошику` : `Додати у кошик товар: ${item.title}`
    "
    @click.stop="onClickAddCart(item)"
  >
    {{ item.isAdded ? 'У кошику' : 'Купити' }}
  </Button>
</template>
