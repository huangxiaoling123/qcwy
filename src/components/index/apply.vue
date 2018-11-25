<template>
	<main>
		<div class="resume">
			<div class="res">
				<span><img src="../../assets/img/logo.png" width="66px"/></span>
				<span class="gz">
					<router-link to='/addr'><span>广州</span><img src="../../assets/img/arrow.png" class="jtb"/></router-link>
				</span>
				<span class="myjob51"><router-link to="/first">我的51job</router-link></span>
			</div>
			<div class="navres">
				<div><router-link to="/myresume">我的简历</router-link></div>
				<div><router-link to="/place">职位搜索</router-link></div>
				<div><router-link to='/hotplace'>热门职位</router-link></div>
				<div><router-link to="/complany">知名企业</router-link></div><br />
			</div>
		</div>
		<div class="myapply">
			<ul class="hxlapply">
				<li v-for="(v,i) in social" :class="{current:selected==i}" @click=changezp(i)>
					<router-link to="/social">{{v}}</router-link>
				</li>			
			</ul>

		</div>
		<div class="apl"><router-view></router-view></div>
		
		<div class="phone">
			<div class="top">
				<span>TOP</span>
				<span><svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-arrLeft-fill"></use></svg>
				</span>
			</div>
			<p>phone_1830768500…</p>
		</div>
		
		
		<footer class="apfoot">
			<ul>
				<li>
					<img src="../../assets/img/gg.png" width="45%"/>
					<p>电脑版</p>
				</li>
				<li>
					<img src="../../assets/img/d.png" width="49%"/>
					<p class="chup">触屏版</p>
				</li>
				<li>
					<img src="../../assets/img/sa.png" width="49%"/>
					<p>App下载</p>
				</li>
				<li>
					<img src="../../assets/img/k.png" width="47%"/>
					<p>微信公众号</p>
				</li>
			</ul>			
			<div class="help">
				<span>使用帮助</span>
				<span>用户反馈</span>
				<span>企业入口</span>
			</div>
			<div class="addrlast">
				<h5>无忧工作网版权所有©1999-2018</h5>
				<h5>51job.com（沪ICP备12015550）</h5>
			</div>
		</footer>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				selected:"0",
				xy:false,
				social:["社会招聘","校园招聘"]
			}
		},
		methods:{
			changezp(i){
				this.selected=i
			}
		}
	}
</script>

<style>
	
	a{
		text-decoration: none;
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
	.resume	.myjob51{
		float: right;
		margin-top: 15px;
		margin-right: 10px;
		color: #ff7e3e !important;
		font-size: 0.9rem;
	}
	.resume	.myjob51 a{
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
	
	
	
	
	.myapply{
		height: 48px;
		background: #FFFFFF;
		text-align: center;
		padding: 0 10px 0 10px;
	}
	.myapply:after{
		content: "";
		display: block;
		clear: both;
	}
	.myapply>ul>li{
		width: 50%;
		height: 48px;
		line-height: 48px;
		float: left;
		border-bottom:1px solid #e6e6e6;
		position: relative;
	}
	.myapply>ul a{
		font-size: 14px;
   		font-family: "Microsoft YaHei";
   		color: #444;
	}
	.myapply li:nth-of-type(1):before{
		content: "";
		display: block;
		position: absolute;
		height: 25px;
		width: 1px;
		background: #e6e6e6;
		right: 0px;
		top: 50%;
		margin-top: -12.5px;
	}
	.current a{
		color: #ff7e3e !important;
	}
	.current:after{
		content: "";
		display:block;
   		width: 60%;
    	height: 3px;		
   	 	background-color: #ff7e3e;
		position: absolute;
		bottom: 0px;
		left: 50%;
		margin-left: -30%;
		transition: 0.3s left;
	}


.phone{
	height: 42px;
	line-height: 42px;
	padding: 6px 20px 0 20px;
	background: #ebebeb;
}
.phone>p{
	color: #ff7e3e !important;
	font-size: 14px;
}
.top{
	float:right;
	
}
.top>span{
	display: inline-block;
	color: #ff7e3e;
	font-size: 0.85rem;
}



footer{
	padding-bottom: 80px;
	padding-top: 20px;
	text-align: center;
	background: #fff2e3;
}
footer>ul:after{
	content: "";
	display: block;
	clear: both;
}
footer a{
	text-decoration: none;
	
}
footer>ul>li{
	width: 25%;
	float: left;
}
footer img{
	/*width: 42%;*/
}
footer>ul p{
	font-size: 0.85rem;
	color: #939393 !important;
}
.chup{
	color: #ff884d !important;
}


.help{
	padding: 15px 0 23px 0;
}
.help span{
	display: inline-block;
	color: #939393;
	font-size: 14px;
	padding: 0 20px 0 20px;
	border-right: 1px solid #939393;
}
.help span:nth-of-type(3){
	border-right: none;
}

.addrlast{
	width: 100%;
	text-align: center;
}
.addrlast h5{
	color: #939393;
	font-weight: 400;
}
</style>