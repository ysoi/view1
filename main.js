// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {$axios} from './utils/';
//全局下注册组件
// import upload   from '@/components/upload';
// Vue.component(upLoad,upload);
Vue.use(ElementUI);
Vue.prototype.$axios=$axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
