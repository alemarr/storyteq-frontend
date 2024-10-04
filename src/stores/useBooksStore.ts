import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { get, set } from '@vueuse/core';

export const useBooksStore = defineStore('books', () => {
  const searchTerm = ref('');
  const books = [
    {
      title: 'Don Quixote',
      author: 'Miguel De Cervantes',
    },
    {
      title: 'Pilgrim\'s Progress',
      author: 'John Bunyan',
    },
    {
      title: 'Robinson Crusoe',
      author: 'Daniel Defoe',
    },
    {
      title: 'Gulliver\'s Travels',
      author: 'Jonathan Swift',
    },
    {
      title: 'Tom Jones',
      author: 'Henry Fielding',
    },
    {
      title: 'Clarissa',
      author: 'Samuel Richardson',
    },
    {
      title: 'Tristram Shandy',
      author: 'Laurence Sterne',
    },
  ];

  const setSearchTerm = (term: string) => {
    set(searchTerm, term);
  };

  const suggestions = computed(() => {
    if (!get(searchTerm) || get(searchTerm).length < 3) return null;

    return books.filter((book) => book.title.toLowerCase()
      .startsWith(get(searchTerm).toLowerCase()))
      .map((book) => book.title);
  });

  return {
    suggestions,
    setSearchTerm,
  };
});
