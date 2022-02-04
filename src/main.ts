import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Aos from "aos"
const instance:any = Aos.init({})
import './assets/tailwind.css';
import 'aos/dist/aos.css'

createApp(App).use(instance).use(router).mount('#app');
