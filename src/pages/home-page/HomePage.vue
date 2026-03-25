<script setup>
import HeroHomePage from './sections/HeroHomePage.vue';
import AboutHomePage from './sections/AboutHomePage.vue';
import PartnersHomePage from './sections/PartnersHomePage.vue';
import ProductsHomePage from './sections/ProductsHomePage.vue';
</script>

<template>
  <main class="page">
    <HeroHomePage />
    <AboutHomePage />
    <PartnersHomePage />
    <ProductsHomePage />
  </main>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
