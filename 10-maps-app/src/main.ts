import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Importa estilos de Leaflet
import 'leaflet/dist/leaflet.css';

createApp(App).mount('#app');
createApp(App).use(router).mount('#app');
