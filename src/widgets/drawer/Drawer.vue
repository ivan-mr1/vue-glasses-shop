<script setup>
import { watch, onMounted, onUnmounted } from 'vue';
import DrawerHead from './DrawerHead.vue';
import DrawerList from './DrawerList.vue';
import DrawerBottom from './DrawerBottom.vue';

const props = defineProps({
  isActive: { type: Boolean, default: false },
  totalPrice: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
});

const emit = defineEmits(['close']);

watch(
  () => props.isActive,
  (active) => {
    if (active) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  },
);

const handleEsc = (e) => {
  if (e.key === 'Escape' && props.isActive) emit('close');
};

onMounted(() => window.addEventListener('keydown', handleEsc));
onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <div class="drawer-overlay" :class="{ 'is-active': isActive }" @click="emit('close')"></div>

    <aside class="drawer" :class="{ 'is-active': isActive }" aria-modal="true" role="dialog">
      <DrawerHead @close="emit('close')" />

      <div class="drawer__content">
        <DrawerList />
      </div>

      <DrawerBottom :total-price="totalPrice" :discount="discount" />
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
  z-index: 998;

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
  z-index: 999;
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
