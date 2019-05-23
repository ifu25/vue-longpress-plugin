import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import LongPress from '@/plugin/LongPress'
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.use(LongPress)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
