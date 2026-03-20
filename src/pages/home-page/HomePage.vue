<script setup>
import Footer from '@/widgets/footer/Footer.vue';
import Header from '@/widgets/header/Header.vue';
import HeroHomePage from './sections/HeroHomePage.vue';
import AboutHomePage from './sections/AboutHomePage.vue';
import PartnersHomePage from './sections/PartnersHomePage.vue';
import ProductsHomePage from './sections/ProductsHomePage.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="page">
      <HeroHomePage />
      <AboutHomePage />
      <PartnersHomePage />
      <ProductsHomePage />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
