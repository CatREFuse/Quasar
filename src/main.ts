import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import directive from './directive';

const app = createApp(App);

app.use(directive).use(createPinia()).mount('#app');
