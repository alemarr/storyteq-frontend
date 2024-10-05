<script setup lang="ts">
import {
  defineProps, defineEmits, ref,
} from 'vue';
import { useFocus, useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: string;
  placeholder: string;
}>();
const emit = defineEmits(['input', 'update:modelValue']);

const value = useVModel(props, 'modelValue', emit);
const input = ref<HTMLInputElement | null>();

useFocus(input, { initialValue: true });
</script>

<template>
  <div class="search-input">
    <font-awesome-icon class="search-input__icon" icon="fa-solid fa-magnifying-glass" />
    <input
      data-cy="search-input__input"
      aria-label="search input"
      ref="input"
      :placeholder="placeholder"
      class="search-input__input"
      v-model="value"
      type="text"
      @input="$emit('input', value)" />
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
}
.search-input__input {
  padding: 8px;
  height: 24px;
  font-size: 16px;
  border: none;
  outline: none;
  width: 100%;
}
</style>
