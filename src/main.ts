import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import directive from './directive';
import router from './router';

const app = createApp(App);

app.use(directive).use(router).use(createPinia()).mount('#app');
