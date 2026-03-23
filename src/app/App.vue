<script setup>
import { provide } from 'vue';
import { usePageNavigation } from '@/shared/hooks/usePageNavigation';
import Home from '@/pages/home-page';
import items from './items';
import './styles/main.scss';
// перенести сюда импорт router
usePageNavigation();
provide('items', items);
</script>

<template>
  <Home />
</template>
