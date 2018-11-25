<template>
	<main>
		<div class="resume">
			<div class="res">
				<span><img src="../../assets/img/logo.png" width="66px"/></span>
				<span class="gz">
					<router-link to='/addr'><span>广州</span><img src="../../assets/img/arrow.png" class="jtb"/></router-link>
				</span>
				<span class="job51"><router-link to="/first">我的51job</router-link></span>
			</div>
			<div class="navres">
				<div><router-link to="/myresume">我的简历</router-link></div>
				<div><router-link to="/place">职位搜索</router-link></div>
				<div><router-link to='/hotplace'>热门职位</router-link></div>
				<div><router-link to="/complany">知名企业</router-link></div><br />
				<router-view></router-view>
			</div>
		</div>

	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:''
			}
		},
		//数据执行一次
		mounted(){
//			this.title=this.$route.params.id
//			console.log(this.$route.params.id)			
		},
		methods:{
//			back(){
//				this.$router.go(-1)
//			},
//			add(){	//执行add 数据随时在变
//				this.title=this.$route.params.id
//				//不要放在 data(）函数中  在需要的地方赋值即可 否则会出现缓存 记录上次的 值
//			}
		}

	}
</script>
<style>
	a{
		text-decoration: none;
	}
	.resume{
		background: #FFFFFF;
	}
	.resume	.res{
		height: 55px;
		line-height: 55px;
		padding-left: 10px;
	}
	.resume	.res>span{
		display: inline-block;
		vertical-align: middle;
		height: 27px;
		line-height: 27px;
	}
	 .resume .gz span{
		color: #ff7e3e !important;
		font-size: 0.9rem;
		padding-right: 10px;
		padding-left: 5px;
	}
	.resume .gz img{
		width: 8px;
		transform: rotate(90deg);
		top: 20px;
	}
	.resume	.gz>a{
		text-decoration: none;
	}
	.resume	.job51{
		float: right;
		margin-top: 15px;
		margin-right: 10px;
		color: #ff7e3e !important;
		font-size: 0.9rem;
	}
	.resume	.job51>a{
		color: #ff7e3e !important;	
	}
 	.resume	.navres{
		height: 40px;
		line-height: 40px;
		width: 100%;
		background: #ff873e;
	}
	.resume .navres>div{
		float: left;
		width: 25%;
		font-size: 14px;
		text-align: center;
    	font-family: "Microsoft YaHei";
	}
	.resume	.navres a{
   		color: #fff;
	}
	
	
	
	
</style>