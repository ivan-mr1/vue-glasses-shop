<script setup>
import Logo from '@/shared/ui/logo/Logo.vue';
import Menu from './Menu.vue';
import Actions from './Actions.vue';
import Burger1 from '@/shared/ui/burger-button/Burger-1.vue';
</script>

<template>
  <header class="header" data-header data-right-padding>
    <div class="header__container">
      <Logo />
      <div data-header-overlay class="header__overlay">
        <Menu />
        <Actions />
      </div>
      <Burger1 />
    </div>
  </header>
</template>

<style scoped></style>
