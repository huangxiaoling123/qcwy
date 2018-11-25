<template>
	<main id="login">
		<div class="login">
			<div class="lgtop">
				<span class="lgback" @click="back()"><img src="../../assets/img/arrow.png"/></span>
				<span class="lglogo"><img src="../../assets/img/logo.png"/></span>
				<span class="lgreg"><router-link to="register">快速注册</router-link></span>
			</div>
			<div class="headpic">
				<!--<span><img src="../../assets/img/icon_180803.a2e1e55f.png"/></span>-->
				<span></span>
				<p>51Job账号登录</p>
			</div>
			<div class="myname">
				<input type="text" id="" value="" placeholder="请输入手机号码/邮箱/用户名"/><br />
				<input type="text" class="pass" value="" placeholder="请输入密码"/>	
				<p></p>
			</div>			
			<div class="forget">
				<span class="for2">忘记密码？</span><span class="for1">自动登录</span>
				<p>登录</p>
			</div>
			<div class="yzm">
				<span>国际手机号登录</span>
				<span>验证码登录</span>
			</div>
			<div class="other">
				<div class="other1"><p>其他登录方式</p></div>
				<div class="qq">
					<span class="myqq"><img src="../../assets/img/login_qq.b221c1d9.png"/></span>
					<span class="wbo"><img src="../../assets/img/login_wb.8461d776.png"/></span>
				</div>
			</div>
			<div class="lglast">
				<p>关于我们-帮助-意见</p>
				<p>51Job.com(泸ICP备1201550)</p>
			</div>
		</div>


	</main>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}	
</script>

<style>
	#login+header{
		display: none;
	}
	.login{
		height: 667px;
		background-color: #eeeeee;
	}
	.lgtop{
		padding-top: 23px;
		position: relative;
	}
	.lgback img{
		width: 11px;
		margin-left: 20px;
		transform: rotate(180deg);
	}
	.lglogo{
		position: absolute;
		left: 50%;
		margin-left: -40px;
	}
	.lglogo img{
		width: 80px;
		/*position: relative;*/
		/*left: 30%;*/
		
	}
	.lgreg a{
		float: right;
		font-size: 18px;
		text-decoration: none;
		padding-right: 20px;
    	color: #ff7e3e !important;
	}
	.headpic{
		position: relative;
		padding-top: 30px;
		height: 73px;
	}
	.headpic>span{
		width: 44px;
    	height: 45px;   	
    	overflow: hidden;
    	display: block;
    	background-image: url(../../assets/img/icon_180803.a2e1e55f.png);
    	background-size: auto 100px;
    	top: 30px;
    	left: 50%;
    	margin-left: -22px;
    	background-position: -81px 0;
    	position: absolute;
	}
	.headpic>p{
		position: absolute;
		bottom: 0px;
		left: 50%;
		margin-left: -50px;
	    font-size: 16px;
	    color: #3e3e3e;
	}
	.myname{
	   	position: relative;	
	}
	.myname input{
		width: 90%;
		padding: 0px;
		margin: 0px;
		border: 1px solid #a0a0a0;
	    height: 50px;
    	padding-left: 10px;
    	font-size: 14px;
    	margin-left: 3%;
    	color: #a0a0a0;
    	position: relative;
	}
	.myname p:after{
		content: "";
		display: block;	
		background-image: url(../../assets/img/icon_180803.a2e1e55f.png);
		background-position: 0px 45px;
		background-size: 350px;
		position: absolute;
	    width: 55px;
	    height: 28px;
	    top: 65px;
	    right: 7%;
	}
	
	.forget{
		padding: 18px;
	}
	.for1{
		padding-left: 20px;	
	    font-size: 16px;
   	 	color: #999;
   	 	position: relative;
	}
	.for1:after{
		content: "";
		display: block;
		position: absolute;
		background-image: url(../../assets/img/icon_180803.a2e1e55f.png);
		background-size: 350px;
		background-position: -20px 2px;
		width: 20px;
		height: 20px;
		top: 0px;
		left: -4px;
	}
	
	.for2{
		float: right;
	    font-size: 16px;
    	color: #394264;
	}
	.forget>p{
		margin-top: 20px;
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    font-size: 18px;
	    color: #fff;
	    background-color: #ff7e3e;
	}
	.yzm>span{
		height: 20px;
		line-height: 20px;
		color: #444;
		font-size:16px;
		padding: 0 20px;
	    font-family: "SimHei" 
	}
	.yzm>span:nth-of-type(1){
		float: right;
	}
	.other{
		margin-top: 40px;
	}
	.other1{
		font-size: 14px;
    	color: #999;
    	margin-left: 20px;
    	margin-right: 20px;
    	border-bottom: 1px solid #c1c0c0;
    	position: relative;
	}
	.other1>p{
		position: absolute;
		text-align: center;
		width: 35%;
		height: 20px;
		background: #eee;
		top: -10px;
		left: 32.5%;
	}
	.qq{
		height: 50px;
		padding-top: 30px;
		margin-bottom: 60px;
		position: relative;
	}
	.qq:after{
		content: "";
		display: block;
		clear: both;
	}
	.qq img{
		width: 50%;
	}
	.myqq{
		position: absolute;
		left: 30%;
	}
	.wbo{
		position: absolute;
		left: 60%;
	}
	.lglast{
	    text-align: center;
	    line-height: 24px;
	    font-size: 14px;
	    color: #777;		
	}
	
/*	.nav{
		display: none;
	}*/
</style>