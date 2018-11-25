import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	//数据
	state:{
		count:0,
		num:'这是仓库数据'
	},
	mutations:{
		increment (state,n){
			state.count+=parseInt(n)

		}
	}
	
})
