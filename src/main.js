// import 'bootstrap/dist/css/bootstrap.min.css';
// import VueSilentbox from 'vue-silentbox';
// import './styles/_variables.scss';
// import './flatly.css';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Vue.use(VueSilentbox);

new Vue({
  render: h => h(App)
}).$mount('#app');
