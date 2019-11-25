// 引入ie
import '@babel/polyfill'


import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";



// 引入css

import '../public/css/index.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
