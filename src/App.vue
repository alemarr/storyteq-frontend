<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import AutoCompleteInput from '@/components/AutoCompleteInput.vue';
import { useCitiesStore } from '@/stores/useCitiesStore';
import { useBooksStore } from '@/stores/useBooksStore';

const citiesStore = useCitiesStore();
const booksStore = useBooksStore();

const { setSearchTerm: setCitiesTerm } = citiesStore;
const { suggestions: citiesSuggestions } = storeToRefs(citiesStore);

const { setSearchTerm: setBooksTerm } = booksStore;
const { suggestions: booksSuggestions } = storeToRefs(booksStore);

const citiesInput = ref('');
const booksInput = ref('');
</script>

<template>
  <main>
    <div class="container">
      <AutoCompleteInput placeholder="Search cities" v-model="citiesInput" :suggestions="citiesSuggestions" @input="setCitiesTerm" />
    </div>
    <div class="container">
      <AutoCompleteInput placeholder="Search books" v-model="booksInput" :suggestions="booksSuggestions" @input="setBooksTerm" />
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  height: 200px;
}
</style>
