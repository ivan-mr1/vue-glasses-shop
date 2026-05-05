<script setup>
import Field from '@/shared/ui/form/field/Field.vue';
import { useProductStore } from '@/entities/product/model/productStore';
import debounce from '@/shared/utils/debounce';

const productStore = useProductStore();

const onChangeSelect = (event) => {
  productStore.setSortBy(event.target.value);
  productStore.fetchItems();
};

const onChangeSearchInput = debounce((event) => {
  productStore.setSearchQuery(event.target.value);
  productStore.fetchItems();
}, 350);
</script>

<template>
  <div class="products__filter">
    <Field
      id="search-product"
      title="Search product"
      type="search"
      :onChangeSearchInput="onChangeSearchInput"
    />
    <select class="products__select" @change="onChangeSelect" :value="productStore.filters.sortBy">
      <option value="-price">ціна вища</option>
      <option value="price">ціна нижче</option>
      <option value="name">за назвою</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.products {
  &__filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    margin-bottom: 20px;
  }
  &__select {
    border-radius: 8px;
    padding-block: 16px;
    padding-inline: 10px;
    font-size: 16px;
  }
}
</style>
