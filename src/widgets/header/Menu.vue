<script setup>
import Social from '@/shared/ui/social/Social.vue';
</script>

<template>
  <nav class="header__menu menu" data-header-menu>
    <ul class="menu__list">
      <li class="menu__item">
        <a href="#about" class="menu__link hover-link">ПРО НАС</a>
      </li>
      <li class="menu__item">
        <a href="#products" class="menu__link hover-link">ПРОДУКТИ</a>
      </li>
      <li class="menu__item">
        <a href="#footer" class="menu__link hover-link">КОНТАКТИ</a>
      </li>
    </ul>
    <Social />
  </nav>
</template>

<style scoped></style>
