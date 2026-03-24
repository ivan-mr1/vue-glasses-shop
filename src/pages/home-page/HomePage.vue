<script setup>
import Header from '@/widgets/header';
import HeroHomePage from './sections/HeroHomePage.vue';
import AboutHomePage from './sections/AboutHomePage.vue';
import PartnersHomePage from './sections/PartnersHomePage.vue';
import ProductsHomePage from './sections/ProductsHomePage.vue';
import Footer from '@/widgets/footer';
import ScrollUpButton from '@/shared/ui/ScrollUpButton';
import { usePageNavigation } from '@/shared/lib/usePageNavigation';

usePageNavigation();
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
    <ScrollUpButton />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
