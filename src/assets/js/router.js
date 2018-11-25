import vueRouter from 'vue-router'
import first from '../../components/index/first.vue' 
import resume from '../../components/index/resume.vue' 
import apply from '../../components/index/apply.vue' 
import my from '../../components/index/my.vue' 
import download from '../../components/index/download.vue'
import resume1 from '../../components/index/resume1.vue'
import place from '../../components/index/place.vue'
import login from '../../components/index/login.vue'
import dl from '../../components/index/denglu.vue'
import register from '../../components/index/registe.vue'

export default new vueRouter({	
	routes:[
		{
			path:'/',component:first,			
		},
		{
			path:'/first',component:first,			
		},
		{
			path:'/resume',component:resume,
			children:[
				{  path:'/resume',component:resume1},
				{  path:'/myresume',component:resume1},
			]
		},
		{
			path:'/apply',component:apply,
			children:[
				{	path:'/social',component:place},
				{	path:'/apply',component:place}
			]
		},
		{
			path:'/my',component:my
		},
		{
			path:'/download',component:download
		},
		{
			path:"/login",component:login
		},
		{
			path:"/register",component:register
		}
		

	]
})
