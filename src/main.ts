import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Components from './components/ui';

const app = createApp(App);

Components.forEach((component) => app.component(component.name, component.component));

app.use(createPinia());

app.mount('#app');
