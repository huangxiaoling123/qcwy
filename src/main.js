import Vue from 'vue'
//引入vue文件
import App from './App.vue'

import vueRouter from 'vue-router'
//引入vue-router文件   npm 

Vue.use(vueRouter)
//把路由挂载在实例上（路由和vue绑定）

//axios 
import axios from 'axios'
Vue.prototype.$http = axios

import router from './assets/js/router.js'

import './assets/css/cssreset.css'
import './assets/css/animate.css'
import './assets/css/app.css'
import '../node_modules/mint-ui/lib/style.css'

import data from '../static/data.json'

import Mint from 'mint-ui';
Vue.use(Mint);

import Vuex from 'vuex';
Vue.use(Vuex)

import store from './assets/js/data.js'


new Vue({
	el:'#app',
	render:h=>h(App),
	router:router,
	store:store
})
