<script setup>
import DrawerHead from './DrawerHead.vue';
import DrawerList from './DrawerList.vue';
</script>

<template>
  <div class="overlay is-active"></div>
  <div class="drawer is-active">
    <DrawerHead />
    <DrawerList />
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.overlay {
  position: fixed;
  z-index: var(--z-body-after);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.8s ease 0s;
  pointer-events: none;
  &.is-active {
    opacity: 1;
  }
}

.drawer {
  position: fixed;
  visibility: hidden;
  transition: visibility 0.8s ease 0s;
  background-color: var(--color-white);
  max-width: 380px;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  padding: 20px 15px;

  &.is-active {
    z-index: var(--z-index-popup);
    overflow: auto;
    visibility: visible;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
