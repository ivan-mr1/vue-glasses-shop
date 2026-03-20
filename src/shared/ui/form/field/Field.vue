<script setup>
defineProps({
  title: String,
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  modelValue: String,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="field">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      class="field__input"
      placeholder=" "
      autocomplete="off"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="id" class="field__label">{{ title }}</label>
  </div>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.field {
  --field-height: 58px;
  --field-padding-x: 16px;
  --field-color-border: #c7c7c7;
  --field-color-active: #9333ea;
  --field-color-label: #8e27ee;
  --field-transition: 0.2s ease-in-out;

  position: relative;
  display: flex;
  flex-direction: column;

  &__input {
    width: 100%;
    height: var(--field-height);
    padding: 18px var(--field-padding-x) 6px;
    background-color: transparent;
    border: 1px solid var(--field-color-border);
    border-radius: 8px;
    font-size: 16px;
    transition: var(--field-transition);

    &:focus {
      outline: none;
      border-color: var(--field-color-active);
      background-color: #f5f5f5;
    }

    &[type='search'] {
      background-image: url('./icon-search_black.svg');
      background-repeat: no-repeat;
      background-position: calc(100% - var(--field-padding-x)) 50%;
      background-size: 16px;
      padding-right: 40px;
    }
  }

  &__label {
    position: absolute;
    left: var(--field-padding-x);
    top: 50%;
    transform: translateY(-50%);
    color: var(--field-color-label);
    pointer-events: none;
    transition: var(--field-transition);
    transform-origin: left top;
  }

  .field__input:focus + &__label,
  .field__input:not(:placeholder-shown) + &__label {
    top: 8px;
    transform: translateY(0) scale(0.75);
    color: var(--field-color-active);
  }
}
</style>

<!--
<template>
  <Field
    id="new-task"
    title="New task title"
    v-model="newTaskText"
  />

  <Field
    id="search-task"
    title="Search task"
    type="search"
    v-model="searchText"
  />
</template>
-->
