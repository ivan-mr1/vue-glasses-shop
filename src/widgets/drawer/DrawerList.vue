<script setup>
import DrawerProduct from './DrawerProduct.vue';
</script>

<template>
  <ul class="drawer__list">
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1 glasses 1"
        image-url="/img/products/glasses/1.webp"
        code="01-5"
        :price="22200.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1 glasses 1"
        image-url="/img/products/glasses/2.webp"
        code="01-1"
        :price="22770.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1 glasses 1"
        image-url="/img/products/glasses/3.webp"
        code="01-2"
        :price="22990.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/1.webp"
        code="01-5"
        :price="22200.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/2.webp"
        code="01-1"
        :price="22770.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/3.webp"
        code="01-2"
        :price="22990.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/1.webp"
        code="01-5"
        :price="22200.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/2.webp"
        code="01-1"
        :price="22770.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/3.webp"
        code="01-2"
        :price="22990.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/1.webp"
        code="01-5"
        :price="22200.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/2.webp"
        code="01-1"
        :price="22770.22"
      />
    </li>
    <li class="drawer__item">
      <DrawerProduct
        title="glasses model 1"
        image-url="/img/products/glasses/3.webp"
        code="01-2"
        :price="22990.22"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.drawer {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    overflow-y: auto;
  }
}
</style>
