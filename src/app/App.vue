<script setup>
import { usePageNavigation } from '@/shared/hooks/usePageNavigation';
import './styles/main.scss';
// перенести сюда импорт router
import Home from '@/pages/home-page';
usePageNavigation();
</script>

<template>
  <Home />
</template>
