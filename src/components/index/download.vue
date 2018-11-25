<template>
	<main>
		<div class="down1">
			<div class="downtop">
				<router-link to='/first'><img src="../../assets/img/logo_logo.png" class="downpic1"/></router-link>
				<div class="downpic2">
					<img src="../../assets/img/logo_20.png"/>
				</div>
			</div>
			<div class="downgf">
				<span>前程无忧51Job-求职招聘找工…</span><span>官方</span>
			</div>
			<div class="downxz">
				<span><img src="../../assets/img/icon_abox3.png"/></span>
				<span>1.1亿次下载</span>
				<span>37.7MB</span>
			</div>
			<div class="downmf">
				<span><img src="../../assets/img/ico_download (1).png"/></span>
				<span>免费下载</span>
			</div>
			<p class="bg4"></p>
			<div class="downpic">
				<mt-swipe :auto="0">
				  <mt-swipe-item><img src="../../assets/img/8.4.0.2.png"/><img src="../../assets/img/8.4.0.3.png"/></mt-swipe-item>
				  <mt-swipe-item><img src="../../assets/img/8.4.0.1.png"/><img src="../../assets/img/8.4.0.4.png"/></mt-swipe-item>
				</mt-swipe>	
			</div>
			<p id="doenhide" :class="{texthide:mytext}" @click="change()">前程无忧51Job，2004年美国纳斯达克上市，中国互联网百强企业。
				<br />许多知名公司、世界500强企业都在51Job招聘人才、发布职位，同时在线职位数超过800万，每周超过5,000万份简历通过51Job发送到招聘企业。<br />
				互联网、金融、房产、汽车、快消……各行业大咖都在这里抢夺人才。<br />
				销售、财务、技术、客服、产品……各岗位的求职者都在前程无忧投递简历。<br />
				更多的企业选择在前程无忧招聘人才，更高效的找到想要的人才。<br />
				更多的求职者选择前程无忧求职，找到了更好福利、更高薪资的工作。<br />
				【职位发现】职位太多懒得看？轻戳，适合你的工作都在这儿<br />			
				【职位搜索】支持附近查找全职兼职，强大的互联网搜索功能<br />
				【简历中心】刷新简历，让HR优先看到你，找工作快人一步<br />
				【谁看过我】HR猎头看过你简历？求职跳槽so easy你懂的<br />
			</p>
			<div class="bb">
				<p>版本：8.4.0</p>
				<p>更新：2018年9月21日</p>
			</div>
			<p class="footer">无忧工作网版权所有©1999-2018</p>		
		</div>
	</main>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				mytext:"true"
			}
		},
		methods:{
			change(){
				this.mytext=!this.mytext
			}
		}
	}
</script>

<style type="text/css">
	.down1{
		background: #FFFFFF;
	}
	.downtop{
		position: relative;
		height:150px;
		margin-bottom: 15px;
		background-image: url(../../assets/img/bg.png);
		background-position: -770px 0px;
	}
	.downpic1{
		position: relative;
		top: 10px;
		left: 10px;
		width: 32px;
	}
	.downpic2{
		width: 100%;
		height: 50px;
		background: #FFFFFF;
		position: absolute;
		bottom: -15px;
		border-radius: 50% 50% 0 0; 
	}
	.downpic2>img{
		width:80px;
		position: absolute;
		top: -30px;
		left: 50%;
		margin-left: -40px;
	}
	.downpic2:after{
		content: "";
		display: block;
		clear: both;
	}
	.downgf{
		padding-top: 10px;
		text-align: center;
	}
	.downgf>span{
		font-size: 18px;
		color: #333;
	}
	.downgf>span:nth-of-type(2){
		color: #ff6000;
		font-size: 10px;
		background-color: #ffefcf;
		border: 1px solid #ff9f20;
		padding: 2px 2px;
	}
	.downxz{
		line-height: 30px;
		font-size: 12px;
	    text-align: center;
	    color: #999;
	}
	.downxz span{
		margin: 0px 5px;
	}
	.downxz img{
		height: 12px;
	}
	
	.downmf{
		text-align: center;
		height: 35px;
		background: #ff6000;
		border: 1px solid #ff6000;
		margin: 15px 12% 20px 12%;
	}
	.downmf img{
		position: relative;
		width: 15px;
		top: 3px;
	}
	.downmf span{
		text-align: center;
		line-height: 35px;
 		color: #FFFFFF;
    	font-size: 16px;
	}
	.bg4{
		height: 10px;
		background-color: #EEEEEE;
	}
	.downpic{		
		height: 240px;
		background: lightgreen;
		position: relative;
	    overflow: hidden;
	    z-index: 1;		
	}
	.downpic img{
		float: left;
		width: 50%;
		height: 100%;
		
	}
/*	.downpic img{
		width: 160px;
   		height: 240px;
	}*/
	
	
	
	
	
	
	
	
	#doenhide{
		font-size: 14px;
    	color: #333;
		margin:5px 18px 20px 18px;
	}
	.texthide{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.bb{
		color: #999;
	    font-size: 12px;
	    line-height: 1.5;
	    margin: 0 18px 15px 18px;
	}
	.footer{
		height: 24px;
		line-height: 24px;
		font-size: 12px;
	    color: #999;
	    text-align: center;
	    padding: 12px 0 12px 0;
	    background: #edf1f3;
	    margin-bottom:60px;
	}	

</style>