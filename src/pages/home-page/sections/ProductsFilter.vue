<script setup>
import Field from '@/shared/ui/form/field/Field.vue';
</script>
<template>
  <div class="products__filter">
    <Field id="search-product" title="Search product" type="search" v-model="searchText" />
    <select name="" id="">
      <option value="ціна вища">ціна вища</option>
      <option value="ціна нижче">ціна нижче</option>
      <option value="за назвою">за назвою</option>
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
