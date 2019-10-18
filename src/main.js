import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import store from './store';

// Remove comment to have primary color as purple
// import 'buefy/dist/buefy.css';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
