<script setup>
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '20px' },
  borderRadius: { type: String, default: '4px' },
});
</script>

<template>
  <div
    class="skeleton"
    :style="{
      width: width,
      height: height,
      borderRadius: borderRadius,
    }"
  ></div>
</template>

<style scoped lang="scss">
.skeleton {
  background: #f0f0f0;
  background: linear-gradient(
    90deg,
    rgba(240, 240, 240, 1) 25%,
    rgba(244, 244, 244, 1) 37%,
    rgba(240, 240, 240, 1) 63%
  );
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
