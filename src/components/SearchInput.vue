<script setup lang="ts">
import {
  defineProps, defineEmits, ref, onMounted,
} from 'vue';
import { useFocus, useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: string;
  placeholder: string;
}>();
const emit = defineEmits(['input', 'update:modelValue']);

const value = useVModel(props, 'modelValue', emit);
const input = ref<HTMLInputElement | null>();

onMounted(() => {
  useFocus(input);
});
</script>

<template>
  <div class="search-input">
    <font-awesome-icon class="search-input__icon" icon="fa-solid fa-magnifying-glass" />
    <input aria-label="search input" ref="input" :placeholder="placeholder" class="search-input__input" v-model="value" type="text" @input="$emit('input', value)" />
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
  outline: 2px solid transparent;
}

.search-input:focus-within {
  outline: 2px solid var(--color-secondary);
}

.search-input__icon {
  color: #ccc;
  background: white;
  height: 24px;
  padding: 8px;
  /*border: 2px solid #ccc;*/
  /*outline: none;*/
}
.search-input__input {
  padding: 8px;
  height: 24px;
  font-size: 16px;
  border: none;
  outline: none;
  /*border: 2px solid #ccc;*/
  /*border-radius: 4px;*/
  width: 100%;
  /*outline: none;*/
}
.search-input__input:focus + .search-input__icon, .search-input__input:hover + .search-input__icon, .search-input__icon:hover + .search-input__input {
  /*border: 2px solid var(--color-secondary);*/
  /*outline: none;*/
}
</style>
