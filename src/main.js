// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css' 
import 'styles/border.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from  'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import store from './store'
 

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  components: { App: App },
  template: '<App/>'
})

//路由根据网址的不同，返回不同的内容给用户。