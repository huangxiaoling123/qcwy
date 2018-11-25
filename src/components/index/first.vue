<template>
	<main class='myfirst'>
	<div class="beijing">
		<nav>
			<div class="logo">
				<div class="addr">
					<router-link to='/addr'><span>广州</span><img src="../../assets/img/arrow.png" class="jtb"/></router-link>
				</div>
				<span><img src="../../assets/img/logo.png" width="66px"/></span>
				<div class="ser"><input type="text" placeholder="请输入关键字"/><img src="../../assets/img/34.png"/></div>
			
			</div>
		</nav>
		<div class="lunbo">
			<div class="lb">
				<mt-swipe :auto="4000">
				  <mt-swipe-item><img src="../../assets/img/750-300a.jpg" width="100%"/></mt-swipe-item>
				  <mt-swipe-item><img src="../../assets/img/h5-shouye0108.jpg" width="100%"/></mt-swipe-item>
				</mt-swipe>	
			</div>
			<p></p>
		</div>
		<div class="inser">
			<div class="demo1"><router-link to='/zhiwei'><span><img src="../../assets/img/5.png" width="35px"/></span><p>职位搜索</p></router-link></div>
			<div class='demo2'><router-link to='/look'><span><img src="../../assets/img/6.png"  width="39px"/></span><p>谁看过我</p></router-link></div>
			<div class="demo3"><router-link to='/school'><span><img src="../../assets/img/7.png"  width="50px"/></span><p>校园招聘</p></router-link></div>
			<div class="demo4"><router-link to='/qiuzhi'><span><img src="../../assets/img/8.png"  width="39px"/></span><p>求职攻略</p></router-link></div>
			<div class="demo5"><router-link to='/duoduo'><span><img src="../../assets/img/9.png"  width="45px"/></span><p>51米多多</p></router-link></div>
		</div>
		<p class="bg1"></p>

		<div class="comp">
			<span><img src="../../assets/img/ht3.png" alt="" width='20px'/>知名企业</span>			
		</div>
		
		<div class="internet">
			<div class="inter-first">
				<span class="more">更多<img src="../../assets/img/arrow.png" width="8px"/></span>
				<span class="inter-logo"><img src="../../assets/img/11.png" width="25px"/></span>
				<span class="intet-title">互联网</span>
			</div>
			<div class="inter-model">
				<div class="inter-pic1">
					<img src="../../assets/img/wangyi.jpg"/>
					<p>网易</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/wanmeishijie.jpg">
					<p>完美世界</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/kdxf.jpg"/>
					<p>科大讯飞</p>
				</div>				
			</div>
			<div class="inter-job">
				<ul class="inter-list1">
					<li v-for="(v,i) in job1">{{v}}</li>
				</ul>
				<ul class="inter-list2">
					<li v-for="(v,i) in job2">{{v}}</li>
				</ul>
			</div>
		</div>
		<div class="internet">
			<div class="inter-first">
				<span class="more">更多<img src="../../assets/img/arrow.png" width="8px"/></span>
				<span class="inter-logo"><img src="../../assets/img/13.png" width="25px"/></span>
				<span class="intet-title">金融/证券/投资</span>
			</div>
			<div class="inter-model">
				<div class="inter-pic1">
					<img src="../../assets/img/guangfa.jpg"/>
					<p>广发证券</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/zs.png">
					<p>招商证券</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/xingye.jpg"/>
					<p>兴业证券</p>
				</div>				
			</div>
			<div class="inter-job">
				<ul class="inter-list1">
					<li v-for="(v,i) in job3">{{v}}</li>
				</ul>
				<ul class="inter-list2">
					<li v-for="(v,i) in job4">{{v}}</li>					
				</ul>
			</div>
		</div>
		
		<div class="internet">
			<div class="inter-first">
				<span class="more">更多<img src="../../assets/img/arrow.png" width="8px"/></span>
				<span class="inter-logo"><img src="../../assets/img/122.png" width="25px"/></span>
				<span class="intet-title">城市服务业</span>
			</div>
			<div class="inter-model">
				<div class="inter-pic1">
					<img src="../../assets/img/second145704.png"/>
					<p>仙妮蕾德</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/second3685559.png">
					<p>PANDORA</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/hongxingmeikailong.jpg"/>
					<p>红星美凯龙</p>
				</div>				
			</div>
			<div class="inter-job">
				<ul class="inter-list1">
					<li v-for="(v,i) in job5">{{v}}</li>
				</ul>
				<ul class="inter-list2">
					<li v-for="(v,i) in job6">{{v}}</li>
				</ul>
			</div>
		</div>

		<div class="internet">
			<div class="inter-first">
				<span class="more">更多<img src="../../assets/img/arrow.png" width="8px"/></span>
				<span class="inter-logo"><img src="../../assets/img/12.png" width="25px"/></span>
				<span class="intet-title">房地产/物业</span>
			</div>
			<div class="inter-model">
				<div class="inter-pic1">
					<img src="../../assets/img/fulidichan.jpg"/>
					<p>复地集团</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/second596451.png">
					<p>星耀集团</p>
				</div>
				<div class="inter-pic1">
					<img src="../../assets/img/yajule.jpg"/>
					<p>雅居乐</p>
				</div>				
			</div>
			<div class="inter-job">
				<ul class="inter-list1">
					<li v-for="(v,i) in job7">{{v}}</li>
				</ul>
				<ul class="inter-list2">
					<li v-for="(v,i) in job8">{{v}}</li>
				</ul>
			</div>
		</div>

		<div class="inter-last">
			<router-link to='/more'>更多知名企业</router-link>
		</div>

		<div class="lunbo2">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/img/750_169.jpg" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/h5-zhongping8-30.jpg" width="100%"/></mt-swipe-item>
			</mt-swipe>			
		</div>
		
		<div class="cont">
			<ul class="contList">
				<li v-for="(v,i) in cont">
					<router-link to="/more">{{v}}<img src="../../assets/img/arrow.png"/></router-link>
				</li>

			</ul>
		</div>
		<p class="bg1"></p>
		
		<div class="comp">
			<span><img src="../../assets/img/43.png" width="20%"/>求职服务</span>			
		</div>
		<div class="myjob">
			<div class="job1"><router-link to='/qiuzhi'><span><img src="../../assets/img/1225.png" /></span><p>求职信</p></router-link></div>
			<div class="job2"><router-link to='/zixun'><span><img src="../../assets/img/1122.png"/></span><p>资讯</p> </router-link></div>
			<div class="job3"><router-link to='/jianli'><span><img src="../../assets/img/1221.png"/></span><p>简历模板</p></router-link></div>
			<div class="job4"><router-link to='/xinchou'><span><img src="../../assets/img/1227.png"/></span><p>薪酬查询</p></router-link></div>
			
			
		</div>
		<p class="bg1"></p>
		
		<div class="zaopin">
			<div><router-link to='/jipin'><img src="../../assets/img/51.png"/></router-link></div>
			<div><router-link to='/gaoxin'><img src="../../assets/img/480_216.png"/></router-link></div>
		</div>
		<p class="bg1"></p>		
		
		<div class="hot">
			<div class="comp">
				<span><img src="../../assets/img/55.png" alt="" width='20px'/>热门推荐</span>			
			</div>	
			<ul class="hotuc">
				<li v-for="(v,i) in listo">{{v}}</li>
			</ul>
		</div>
		
		<div class="inter-last">
			<router-link to='/more'>更多热门推荐</router-link>
		</div>		
		<p class="bg1"></p>	
		
		
		<div class="job">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">热门职位</mt-tab-item>
			  <mt-tab-item id="2">热门城市</mt-tab-item>
			  <mt-tab-item id="3">周边城市</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <!--<mt-cell v-for="n in 10" :title="'content ' + n" />-->
			    <div class="hotjob">
			    	<ul>
						<transition-group tag='section' enter-active-class='animated fadeOutLeft'>
							<li v-for="(v,i) in hotjob" :key='i'>{{v}}</li>
						</transition-group>			    		
			    	</ul>
			    </div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <div class="hotjob">
			    	<ul>
			    		<li v-for="(v,i) in hotcity">{{v}}</li>
			    	</ul>
			    </div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <div class="hotjob">
			    	<ul>
			    		<li v-for="(v,i) in hotcity">{{v}}</li>
			    	</ul>
			    </div>
			  </mt-tab-container-item>
			</mt-tab-container>
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
		
	</div>
		<footer>
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
	
		<div class="myfixed">
			<span>快速注册，获取高薪职位</span>
			<span><router-link to="/login">登录</router-link></span>
			<span><router-link to='/register'>注册</router-link></span>
		</div>
	</main>
</template>




<script type="text/javascript">

	export default{
//		 name: 'page-navbar',
		data(){
			return{
				selected:'1',
				cot1:"上有老下有小,算算个税减多少",
				cot2:"[名企高薪区]月入8000的服务岗在这",
				cot3:"面试官向你递名片，期待与你成好友",
				cot4:"您有一份面试通知待查收！",
				cot5:"这六个技巧让你的简历更有卖点",
				listo:['UC浏览器','WIFI万能钥匙','桌面美化','搜房网','2345网址导航'],
				cont:[],				job1:[],
				job2:[],				job3:[],
				job4:[],				job5:[],
				job6:[],				job7:[],
				job8:[],
				hotjob:[],
				hotcity:[]
			}
		},
		mounted(){
			this.first1()		 		
		},
		methods:{
			first1(){
				this.$http.get('../../../static/data.json').then((response)=>{
					this.cont=response.data.cont;
					this.job1=response.data.job1;
					this.job2=response.data.job2;	
					this.job3=response.data.job3;
					this.job4=response.data.job4;
					this.job5=response.data.job5;
					this.job6=response.data.job6;
					this.job7=response.data.job7;
					this.job8=response.data.job8;
					this.hotjob=response.data.hotjob;
					this.hotcity=response.data.hotcity;	
				})
			}			
		}
	
	}
</script>
<style scoped>
h4,p{
	color: red;
}
/*nav{
	background: #FFFFFF;
}*/
.beijing{
	background: #FFFFFF;
}
.logo{
	position: relative;
	width: 100%;
	height: 60px;
}
.logo>span>img{
	margin-top: 15px;
	margin-left: 10px;
}
.addr{
	float: right;
	position: relative;
	padding-right: 40px;
}
.addr>a{
	text-decoration: none;
	line-height: 50px;
	color: #ff842f;
	font-size: 0.75rem
}
.addr img{
	width: 8px;
	position: absolute;
	transform: rotate(90deg);
	top: 20px;
	right: 15px;
}
.ser{
	height: 30px;
	width: 40%;
	position: absolute;
	float: right;
	left: 27%;
	top: 15px;
}
.ser input{
		border: 0px;
		height: 24px;
		width: 85%;
		background: #ebebeb;
		padding: 3px 40px 3px 30px;
		border-radius: 3px;
		font-size: 0.85rem;
}
.ser img{
	width: 25px;
	position: absolute;
	top: 15%;
}

.lunbo{
	position: relative;
}
.lb{
	width: 100%;
	height: 150px;
}
.mint-swipe{
	position: relative;
}
.lunbo .mint-swipe-indicators{
	position: absolute;
	top: 110px;
}
.lunbo>p{
	position: absolute;
	height:18px;
	width: 100%;
	background: #FFFFFF;
	bottom: -10px;
	border-radius: 100% 100% 0 0;

}






.inser{
	height: 100px;
	background: #ffffff;
	background-color: #FFFFFF;
}
.inser a{
	text-decoration: none;
	color: #868686;
	font-size: 0.87rem;
}
.inser p{
	color: #868686 !important;
	font-size: 0.87rem;
}
.demo1,.demo2,.demo3,.demo4,.demo5{
	text-align: center;
	float: left;
	padding-top: 15px;
	width: 20%;
}
.bg1{
	margin-top: 6px;
	background: #ebebeb;
	width: 100%;
	height: 5px;
}

.comp{
	color: #868686;
	font-size: 1rem;
	height: 25px;
	margin: 0px 10px 0px 10px;
	border-bottom: 1px solid #c8c8c8;
	position: relative;
	margin-bottom: 10px;
}
.comp span{
	text-align: center;
	width: 26%;
	height: 25px;
	padding-right: 10px;
	padding-left: 10px;
	background: #FFFFFF;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -15%;
	margin-top: -5px;
}
.comp img{
	position: relative;
	top: 2px;
}


.internet{
	line-height: 40px;
	padding-left: 10px;
	margin-top: 10px;	
}
.internet:after{
	content: "";
	display: block;
	clear: both;
}
.inter-first{
	padding-right: 20px;
}
.more{
	float: right;
	color: #868686;
	font-size: 0.9rem;
}
.intet-title{
	color: #ffae26;
	font-size: 0.9rem;
}
.more>img{
	position: relative;
	top: 2px;
	right: -8px;
} 
.inter-logo{
	position: relative;
	top: 7px;
}
.inter-model{
	padding-right: 8px;
}
.inter-model:after{
	content: "";
	display: block;
	clear: both;
}
.inter-pic1{
	position: relative;
	display: inline-block;
	text-align: center;
	float: left;
	width: 33.3%;
}
.inter-pic1 p{
	color: #868686 !important;
	font-size: 0.9rem;
	height: 20px !important;
	line-height: 20px;
}
.inter-pic1 img{
	width: 60px;
	border:1px solid #d4d4d4;
	border-radius: 10px;
	position: relative;
	top: 8px;
}
.inter-pic1:nth-of-type(1):after{
	position: absolute;
  content: "";
	width: 1px;
	height: 26px;
	background-color: #d4d4d4;
	top: 30px;
	left: 100%;
}
.inter-pic1:nth-of-type(2):after{
	position: absolute;
  content: "";
	width: 1px;
	height: 26px;
	background-color: #d4d4d4;
	top: 30px;
	left: 100%;
}

.inter-job{
	width: 100%;
	padding-top: 20px;
}
.inter-job>ul:after{
	content: '';
	display: block;
	clear: both;
}
.inter-job>ul>li{
	text-align: center;
	width: 24%;
	height: 22px;
	line-height: 20px;
	float: left;
	color:  #505050;
	font-size: 1rem;
	margin-top: 13px;
	margin-bottom: 13px;
	border-right: 1px solid  #d4d4d4;
}
.inter-list1{
	border-top: 1px dashed #e6e6e6;
	border-bottom: 1px dashed #e6e6e6;
}
.inter-list2{
	border-bottom: 1px dashed #e6e6e6;
}
.inter-job li:nth-of-type(4){
	border-right: none;
}

.inter-last{
	border-top: 1px solid #e6e6e6;
	text-align: center;
	height: 44px;
	line-height: 44px;
	width: 100%;
}
.inter-last a{
	text-decoration:none;
	font-size: 0.85rem;
	color: #999;
}


.lunbo2{
	height: 90px;
	background: #FFFFFF;
}

.contList{
	text-align: left;
	margin-left: 21px;
	margin-right: 21px;
}
.contList>li{
		position: relative;
	width: 100%;
	display: inline-block;
	height: 22px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #d5d5d5;
}
.contList>li:nth-of-type(5){
	border-bottom: none;
}
.contList a{
	text-decoration: none;
	color: #505050;
	font-size: 1.1rem
}
.contList img{
	width: 10px;
	position: absolute;
	top: 15px;
	left: 97%;
}

/*求职服务*/
.myjob{
	width: 100%;
	margin-top: 30px;
	margin-bottom: 20px;
}
.myjob:after{
	content: "";
	display: block;
	clear: both;
}
.job1,.job2,.job3,.job4{
	
	width: 25%;
	float: left;
	text-align: center;
}
.myjob img{
	width:35% ;
}
.myjob a{
	text-decoration: none;
}
.myjob p{
		color: #424242 !important;
		font-size: 0.9rem;
}

.zaopin{
	width: 100%;
	position: relative;
	display: inline-block;
	border: 1px solid ridge;
}
.zaopin>div{
	width: 50%;
	float: left;
}
.zaopin img{
	width: 100%;
}
.zaopin:after{
	content: "";
	position:absolute;
	background: #dedede;
	width: 1px;
	height: 72px;
	top: 50%;
	margin-top: -35px;
	left: 50%;
	
}

.hotuc{
	margin: 0 10px;
	padding: 11px 0;
	border-bottom: 1px solid #dedede;
}
.hotuc:after{
	content: "";
	display: block;
	clear: both;	
}
.hotuc>li{
	text-align: center;
	float: left;
	width: 33.3%;
	height: 24px;
	color: #505050;
	font-size: 0.95rem;
	padding: 5px 0;
}


/*job*/
.job{
	/*height: 200px;*/
	/*background: lightyellow;*/
}
.job .mint-navbar{
	border: 1px solid #EEEEEE;
}
.hotjob{
	padding: 15px 0 15px 0;
}
.job .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #ff7e3e;
    color: #ff7e3e;
}
.hotjob:after{
	content: "";
	display: block;
	clear: both;
}
.hotjob li{
	float: left;
  width: 38%;
  height: 24px;
  line-height: 24px;
  padding: 0 6%;
  color: #505050 !important;
  font-size: 14px;
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
.myfixed{
	max-width: 480px;
	position: fixed;
	height: 50px;
	line-height: 50px;
	padding-left:20px ;
	width: 100%;
	background: black;
	opacity: 0.8;
	bottom: 60px;
	color: #FFFFFF;
}
.myfixed span:nth-of-type(2){
	right: 10px;
}
.myfixed span:nth-of-type(2) a{
	margin-right:10px;
	margin-left: 10%;
	padding: 5px 10px 5px 10px;
	background:#ff7b3e ;
	border-radius: 5px;
	text-decoration: none;
	color: #FFFFFF;
}
.myfixed span:nth-of-type(3) a{
	height: 50px;
	right:10px;
	padding: 5px 10px 5px 10px;
	background:#ff7b3e ;
	border-radius: 5px;
	text-decoration: none;
	color: #FFFFFF;
}
</style>
