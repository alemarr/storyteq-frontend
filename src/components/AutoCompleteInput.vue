<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useVModel } from '@vueuse/core';
import SearchInput from '@/components/SearchInput.vue';
import SuggestionsList from '@/components/SuggestionsList.vue';

const props = defineProps<{
  modelValue: string;
  placeholder: string;
  suggestions: string[] | null;
}>();
const emit = defineEmits(['input', 'update:modelValue']);

const value = useVModel(props, 'modelValue', emit);
</script>

<template>
  <div class="autocomplete">
    <SearchInput :placeholder="placeholder" v-model="value" @input="$emit('input', value)" />
    <SuggestionsList :suggestions="suggestions" />
  </div>
</template>

<style scoped>
.autocomplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
