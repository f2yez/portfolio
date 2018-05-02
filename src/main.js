import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import 'devicon-2.2/devicon.min.css';
import './assets/styles/style.scss';

Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
