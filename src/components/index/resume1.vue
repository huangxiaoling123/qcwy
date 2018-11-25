<template>
	<main>
		<div class="jl">
			<div v-for="(v,i) in res1">
				<h5>{{v.title}}</h5>
				<p>{{v.time}}</p>
				<p>{{v.zl}}<span><img :src="v.img" class="jl-pic"/></span></p>
				<p class="send"><input type="radio" name="" id="" value="" />{{v.send}}</p>
				<p>{{v.gk}}</p>

							
				<ul class="deal">
					<li class="deal1">刷新</li>
					<li>简历编辑</li>
					<li>预览</li>
					<li>复制</li>
					<li>公开程度</li>
					<li>删除</li>
				</ul>
				<p class="bg2"></p>
			</div>				
		</div>
		<div class="create">
			<p>+创建简历</p>
		</div>	
		<div class="phone">
			<div class="top">
				<span>TOP</span>
				<span><svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-arrLeft-fill"></use></svg>
				</span>
			</div>
			<p>phone_1830768500…</p>
		</div>		

		<div class="last">
			<ol class="computer">
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
			</ol>			
			<div class="help">
				<span>使用帮助</span>
				<span>用户反馈</span>
				<span>企业入口</span>
			</div>
			<div class="addrlast">
				<h5>无忧工作网版权所有©1999-2018</h5>
				<h5>51job.com（沪ICP备12015550）</h5>
			</div>
		</div>		
		
	</main>
</template>

<script type="text/javascript">
//	import data1 from "../../../static/data.json"
	export default{

		data(){
			return{
				res1:{}
			}
		},
		mounted(){
			this.good()
		},
		methods:{
			good(){
				this.$http.get('../../../static/data.json').then((response)=>{
					this.res1=response.data.jianli
					console.log(response.data.jianli)
				})
			}
		
		}

	}
</script>

<style>
	
	.jl{
		background: #ffffff;
	}
	.jl>div{
	}
	.jl>div>h5{
		line-height: 32px;
	    color: #444;
		padding: 0 21px 0 21px;	     	       
	}
	.jl>div>p{
	    line-height: 22px;
	    font-size: 12px;
	    color: #868686;
		padding: 0 21px 0 21px;	    
	}
	.jl>div>p>span{
		position: relative;
		display: inline-block;
		overflow: hidden;
		width: 100px;
		height: 22px;
		top: 4px;
		left: 10px;
	}	
	.jl-pic{
		position: absolute;
		width: 100%;
		top: -57px;		
	}
	.jl .send{
		float: right;
		padding-right: -10px;
	}
	.jl .send>input{
		margin-right: 5px;
		position: relative;
		top: 2px;
		background: #FFFFFF;
	}
	
	.deal{
		text-align: center;
	}
	.deal:after{
		content: "";
		display: block;
		clear: both;
	}
	.deal>li{
		float: left;
		width: 32%;
		color: #868686;
		font-size: 13px;
	    background-color: #fff8ed;
		margin-top: 2%;
	    margin-right: 2%;
	    position: relative;
	}	
	.deal>li:nth-of-type(3),.deal>li:nth-of-type(6){
		margin-right: 0%;
	}
	.deal>li:after{
		content: "";
		display: block;
		position: absolute;
		background-image: url(../../assets/img/icon_abox.png);
		background-repeat: no-repeat;
		width: 20px;
   		height: 20px;
   		top: 10px;
		left: 50%;
		background-size:120px;	
	}
	.deal>li:nth-of-type(1):after{
		margin-left: -45px;
	}
	.deal>li:nth-of-type(2):after{
		margin-left: -45px;
		background-position: -23px 0px;
	}
	.deal>li:nth-of-type(3):after{
		width: 27px;
		margin-left: -48px;
		background-position: -46px -1px;
	}
	.deal>li:nth-of-type(4):after{
		margin-left: -45px;
		background-position: 0px -24px;
	}
	.deal>li:nth-of-type(5):after{
		width: 27px;
		margin-left: -60px;
		background-position: -23px -24px;
	}
	.deal>li:nth-of-type(6):after{
		width: 27px;
		margin-left: -48px;
		background-position: -46px -24px;
	}	
	.bg2{
		height: 7px;
		background: #EEEEEE;
	}
	.create{
		height: 50px;
		background: #FFFFFF;
		line-height: 50px;
	    color: #4c99ff;
	    font-size: 14px;
	    text-align: center;
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



.last{
	padding-bottom: 80px;
	padding-top: 20px;
	text-align: center;
	background: #fff2e3;
}
.last .computer:after{
	content: "";
	display: block;
	clear: both;
}
.last a{
	text-decoration: none;
	
}
.computer>li{
	width: 25%;
	float: left;
}
.last img{
	/*width: 42%;*/
}
.computer>li>p{
	height: 20px;
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