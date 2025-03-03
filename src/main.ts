import { createApp } from 'vue'
import App from './App.vue'
import router from './router/flow.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@creative-tim-official/argon-dashboard-free/assets/css/argon-dashboard.css";
import "@creative-tim-official/argon-dashboard-free/assets/css/argon-dashboard.min.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Importar ícones específicos
import { faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Adicionar ícones à biblioteca
library.add(faCode, faAddressBook, faGithub, faLinkedin);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
