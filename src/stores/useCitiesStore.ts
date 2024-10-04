import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { get, set } from '@vueuse/core';

export const useCitiesStore = defineStore('cities', () => {
  const searchTerm = ref('');
  const cities = [
    'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa',
  ];

  const setSearchTerm = (term: string) => {
    set(searchTerm, term);
  };

  const suggestions = computed(() => {
    if (!get(searchTerm) || get(searchTerm).length < 3) return null;

    return cities.filter((city) => city.startsWith(get(searchTerm).toLowerCase()));
  });

  return {
    suggestions,
    setSearchTerm,
  };
});
