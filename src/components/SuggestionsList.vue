<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  suggestions: string[] | null
}>();
</script>

<template>
  <div class="suggestions" v-if="suggestions">
    <div v-if="suggestions.length">
      <div
        v-for="suggestion in suggestions"
        :key="suggestion"
        class="suggestions__suggestion"
      >
        {{ suggestion }}
      </div>
    </div>
    <div v-else class="suggestions__suggestion">No suggestions</div>
  </div>
</template>

<style scoped>
.suggestions {
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 4px;
  background-color: white;
}

.suggestions__suggestion {
  background: white;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  border-bottom: 1px solid #ccc;
}

.suggestions__suggestion:hover {
  background-color: #ccc;
}
</style>
