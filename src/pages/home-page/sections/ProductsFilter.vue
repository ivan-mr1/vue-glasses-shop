<script setup>
import Field from '@/shared/ui/form/field/Field.vue';
import { inject } from 'vue';
const onChangeSelect = inject('onChangeSelect');
</script>
<template>
  <div class="products__filter">
    <Field id="search-product" title="Search product" type="search" v-model="searchText" />
    <select @change="onChangeSelect" name="" id="">
      <option value="-price">ціна вища</option>
      <option value="price">ціна нижче</option>
      <option value="name">за назвою</option>
    </select>
  </div>
</template>
<style scoped lang="scss">
@use '@helpers' as *;

.products__filter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 20px;
}
</style>
