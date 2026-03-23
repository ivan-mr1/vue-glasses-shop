<script setup>
import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import ScrollUpButton from '@/shared/ui/ScrollUpButton/ScrollUpButton.vue';
import { usePageNavigation } from '@/shared/lib/usePageNavigation';

usePageNavigation();
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="page"></main>
    <Footer />
    <ScrollUpButton />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
