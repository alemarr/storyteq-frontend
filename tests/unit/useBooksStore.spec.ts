import { get } from '@vueuse/core';
import { createPinia, setActivePinia, storeToRefs } from 'pinia';
import { useBooksStore } from '@/stores/useBooksStore';

describe('useBooksStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should return suggestions', () => {
    const store = useBooksStore();
    const { setSearchTerm } = store;
    const { suggestions } = storeToRefs(store);
    setSearchTerm('Don');
    expect(get(suggestions)).toEqual(['Don Quixote by Miguel De Cervantes']);
  });

  it('should return `null` when search term is empty', () => {
    const store = useBooksStore();
    const { setSearchTerm } = store;
    const { suggestions } = storeToRefs(store);
    setSearchTerm('');
    expect(get(suggestions)).toEqual(null);
  });

  it('should return an empty array when there are no matches', () => {
    const store = useBooksStore();
    const { setSearchTerm } = store;
    const { suggestions } = storeToRefs(store);
    setSearchTerm('noMatch');
    expect(get(suggestions)).toEqual([]);
  });
});
