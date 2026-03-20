<script setup>
import Scroller from '@/shared/ui/scroller/Scroller.vue';

const scrollerPartners = [
  'CHANCE',
  'DACCHI',
  'GUCHINI',
  'TEMPO',
  'LORIS',
  'ALANIE',
  'BELLEESSA',
  'AGIO',
  'AGIO',
  'CORRADO',
  'GOOD LUCK',
  'SALVO',
  'CRISTAL',
];
</script>
<template>
  <section class="page__partners partners" aria-labelledby="partners-title">
    <div class="partners__container">
      <div class="partners__header-block header-block">
        <h2 class="header-block__title" id="partners-title">Популярні бренди</h2>
      </div>
      <Scroller
        :items="scrollerPartners"
        direction="right"
        speed="fast"
        class="partners__scroller"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.partners {
  &__header-block {
    margin-bottom: 40px;
  }
}
</style>
