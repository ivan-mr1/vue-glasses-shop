<script setup>
import Logo from '@/shared/ui/logo/Logo.vue';
import Menu from './Menu.vue';
import Actions from './Actions.vue';
import Burger1 from './burger-button';
</script>

<template>
  <header class="header" data-header data-right-padding>
    <div class="header__container">
      <Logo />
      <div data-header-overlay class="header__overlay">
        <Menu
          :list="[
            { name: 'ПРО НАС', goto: 'about' },
            { name: 'ПРОДУКТИ', href: 'products' },
            { name: 'КОНТАКТИ', href: 'footer', goto: 'footer' },
          ]"
        />
        <Actions />
      </div>
      <Burger1 />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@helpers' as *;
@use './header-fon';

.header {
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include adaptive-clamp('column-gap', 40, 20);
    @include adaptive-clamp('min-height', 100, 65);
  }

  &__overlay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }

  &__logo {
    position: relative;
    z-index: 5;
    font-family: var(--second-family);
    font-size: rem(32);
    color: var(--color-light);
    cursor: pointer;

    @include hover {
      color: var(--color-orange);
    }
  }

  &__actions {
    position: relative;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: rem(16);
  }

  &__action {
    --size: #{rem(40)};

    @include square(var(--size));
  }
}
</style>
