import { get } from '@vueuse/core';
import { createPinia, setActivePinia, storeToRefs } from 'pinia';
import { useCitiesStore } from '@/stores/useCitiesStore';

describe('useCitiesStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should return suggestions', () => {
    const store = useCitiesStore();
    const { setSearchTerm } = store;
    const { suggestions } = storeToRefs(store);
    setSearchTerm('san');
    expect(get(suggestions)).toEqual(['san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan']);
  });

  it('should return `null` when search term is empty', () => {
    const store = useCitiesStore();
    const { setSearchTerm } = store;
    const { suggestions } = storeToRefs(store);
    setSearchTerm('');
    expect(get(suggestions)).toEqual(null);
  });

  it('should return an empty array when there are no matches', () => {
    const store = useCitiesStore();
    const { setSearchTerm } = store;
    const { suggestions } = storeToRefs(store);
    setSearchTerm('noMatch');
    expect(get(suggestions)).toEqual([]);
  });
});
