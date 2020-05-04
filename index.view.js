
// 引入 Vue
import Vue from 'vue';

// 引入 VueRouter
import router from './src/router';

// 引入 Vuex
import store from './src/store';

// 引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

// 引入 localForage
import localForage from 'localforage';
Vue.prototype.$localForage = localForage;

// 引入 VueLazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  error: import('@/assets/image/loading.svg'),
  loading: import('@/assets/image/loading.svg')
});

import JesLoading from 'jes-loading';
Vue.use(JesLoading);


import JesButton from '@/components/JesButton/JesButton.vue';
Vue.component('jes-button', JesButton);

// 引入 App 根组件
import App from './src/App.vue';

new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App),
}).$mount('#app');
