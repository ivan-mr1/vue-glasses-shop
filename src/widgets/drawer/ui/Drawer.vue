<script setup>
import DrawerHead from './DrawerHead.vue';
import DrawerList from './DrawerList.vue';
import DrawerBottom from './DrawerBottom.vue';
import InfoBlock from '@/shared/ui/info-block';
import cartEmptyImg from '@/shared/assets/img/drawer/cart-empty.png';
import orderImg from '@/shared/assets/img/drawer/order.png';
import { useCartStore } from '@/entities/cart';

defineProps({
  isActive: { type: Boolean, default: false },
});

const cartStore = useCartStore();
</script>

<template>
  <Teleport to="body">
    <div
      class="drawer-overlay"
      :class="{ 'is-active': isActive }"
      @click="() => cartStore.closeDrawer()"
    ></div>

    <aside class="drawer" :class="{ 'is-active': isActive }">
      <DrawerHead />
      <div class="drawer__content">
        <div v-if="!cartStore.finishPrice || cartStore.orderId" class="drawer__infoblock">
          <InfoBlock
            v-if="!cartStore.finishPrice && !cartStore.orderId"
            :image-url="cartEmptyImg"
            title="Кошик порожній"
            text="Додайте бодай один товар, щоб зробити замовлення."
          />
          <InfoBlock
            v-if="cartStore.orderId"
            :image-url="orderImg"
            :image-width="83"
            title="Замовлення оформлене!"
            :text="`Ваше замовлення № ${cartStore.orderId} скоро буде передано кур'єрській доставці`"
          />
        </div>

        <DrawerList v-if="cartStore.finishPrice" />
      </div>

      <DrawerBottom v-if="cartStore.finishPrice" />
    </aside>
  </Teleport>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: var(--z-body-after);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &.is-active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-index-popup);
  width: 100%;
  max-width: 400px;
  height: 100dvh;
  padding: 30px 20px;
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);

  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &.is-active {
    transform: translateX(0);
  }

  &__content {
    flex: 1;
    min-height: 0;
    margin-block: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  :deep(.drawer__list) {
    height: 100%;
    overflow-y: auto;
    padding-right: 5px;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-orange);
      border-radius: 10px;
    }
  }
}

@media (max-width: 480px) {
  .drawer {
    max-width: 100%;
    padding: 20px 15px;
  }
}
</style>
