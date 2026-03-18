<script setup>
import Footer from '@/widgets/footer/Footer.vue';
import Header from '@/widgets/header/Header.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="page"></main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
</style>
