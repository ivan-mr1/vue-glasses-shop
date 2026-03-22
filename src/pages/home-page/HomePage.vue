<script setup>
import Footer from '@/widgets/footer';
import Header from '@/widgets/header';
import HeroHomePage from './sections/HeroHomePage.vue';
import AboutHomePage from './sections/AboutHomePage.vue';
import PartnersHomePage from './sections/PartnersHomePage.vue';
import ProductsHomePage from './sections/ProductsHomePage.vue';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
import Drawer from '@/widgets/drawer';
</script>

<template>
  <div class="wrapper">
    <Drawer />
    <Header />
    <main class="page">
      <HeroHomePage />
      <AboutHomePage />
      <PartnersHomePage />
      <ProductsHomePage />
    </main>
    <Footer />
    <ScrollUpButton />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
