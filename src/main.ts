import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGolang } from '@fortawesome/free-brands-svg-icons';
import { faArrowDownLong, faChevronRight, faFileCode, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGolang, faChevronRight, faArrowDownLong, faTerminal, faFileCode);

const app = createApp(App);

// eslint-disable-next-line vue/component-definition-name-casing
app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
