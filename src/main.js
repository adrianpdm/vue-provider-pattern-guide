import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
    this.$nextTick(() => {
      window.setUserData = function() {
        localStorage.setItem('userData', JSON.stringify({
          name: 'wownice',
          job: 'front-end-developer',
          age: 25,
        }));
      };
      window.clearUserData = function() {
        localStorage.removeItem('userData');
      };
    })
  },
  render: h => h(App)
}).$mount('#app')
