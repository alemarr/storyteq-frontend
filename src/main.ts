import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { createPinia } from 'pinia';
import App from './App.vue';

import './assets/main.css';

library.add([
  faMagnifyingGlass,
]);

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
