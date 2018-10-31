// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./style/sass/common.scss"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import {$axios} from "./axios/axios"
import store from "./store/index"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "normalize.css/normalize.css"

import infiniteScroll from 'vue-infinite-scroll'
// import getUrl from "./utils/todayNews"
Vue.use(infiniteScroll)


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
// Vue.use(getUrl)
Vue.prototype.$axios = $axios
// Vue.prototype.getUrl = getUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
