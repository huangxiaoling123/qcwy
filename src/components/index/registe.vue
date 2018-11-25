<template>
	<main id="register">
		<div class="register">
			<div class="lgtop">
				<span class="lgback" @click="back()"><img src="../../assets/img/arrow.png"/></span>
				<span class="lgreg1">51Job账号注册</span>
				<span class="lgdl"><router-link to="login">登录</router-link></span>
			</div>
			<div class="telephone">
				<ul>
					<li v-for="(v,i) in telep" :class="{current1:selected==i}" v-model="str" @click=mychange(i)>{{v}}</li>
				</ul>
				<div class="reg1">
					<div v-show="str==0">
						<span>+86</span>
						<img src="../../assets/img/arrow.png"/>
						<input class="int1" type="text" placeholder="请输入手机号码"/><br />
						<p class="int2p"></p>												
						<input class="int2" type="text" placeholder="请输入密码，6-16位字母加数字"/>
						<input class="int3" type="text" placeholder="请输入短信验证码"/>
						<span class="int3-send">发送验证码</span>						
					</div>
					<div v-show="str==1"><p>222</p></div>
				</div>
			</div>
			<div class="read"><span>我已阅读并同意</span><span>服务声明</span></div>
			<div class="regs">
				<p>注册</p>
			</div>
			<div class="reglast">
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
				selected:"0",
				str:"0",
				telep:["手机注册","邮箱注册"],
				telep1:["11","2"]
			}
		},
		methods:{
			mychange(i){
				this.selected=i;
				this.str=i
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style >

	#register+header{
		display: none;
	}
	.register{
		height:100%;
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
	
	.lgreg1{
		position: absolute;
		left: 50%;
		margin-left: -50px;
		
	}
	.lgdl a{
		float: right;
		font-size: 18px;
		text-decoration: none;
		padding-right: 20px;
    	color: #ff7e3e !important;
	}
	.telephone ul{
		margin: 40px 20px 0px 20px;
	}
	.telephone ul:after{
		content: "";
		display: block;
		clear: both;
	}
	.telephone li{
		width: 50%;
   	 	height: 40px;
    	line-height: 40px;
    	float: left;
    	text-align: center;
    	font-size: 16px;
    	color: #FFFFFF;
   	 	background-color: #c1c1c1;
	}
	.current1{
		background: #ff7e3e !important;
	}
	.reg1{
		margin:0px 20px 0px 20px;
		position: relative;
	}
	.reg1 input{
    	height: 50px;
    	border: 1px solid #EEEEEE;
    	color: #EEEEEE;
	}
	.int1{
		padding-left: 30%;
		width: 70%;
	}

	.int2{
		padding-left: 2%;
		width: 98%;
	}
	.int3{
		padding-left: 2%;
		width: 98%;
	}
	.reg1 span:nth-of-type(1){
		position: absolute;
		top:15px;
		left: 5%;
	}
	.reg1 img{
		position: absolute;
		transform: rotate(90deg);
		width: 10px;
		top: 18px;
		left: 18%;
	}
	.int2{
		
	}
	.int2p{
		position: absolute;
		width: 60px;
		height: 30px;
		top: 63px;	
		right: 3%;
		background-image: url(../../assets/img/icon_180803.a2e1e55f.png);
		background-size: 350px;
		background-position: 0px -20px;
	}
	.int3-send{
		position: absolute;
		bottom: 8px;
		right: 15px;
		padding: 0 6px;
		width: 70px;
	    height: 35px;
	    line-height: 35px;
	    font-size: 14px;
	    text-align: center;
	    color: #ff7e3e;
	    background: #fff7f3;
	    border: 1px solid #ff7e3e;
	}
	.read{
		margin-top: 20px;
		padding-left: 50px;
		font-size: 16px;
   		color: #999;
   		position: relative;
	}
	.read span:nth-of-type(1):before{
		content: "";
		display: block;
		position: absolute;
		background-image: url(../../assets/img/icon_180803.a2e1e55f.png);
		background-size: 350px;
		background-position: -20px 2px;
		width: 20px;
		height: 20px;
		top: 1px;
		left: 22px;
	}
	.read span:nth-of-type(2){
		color:#f0782f;
	}
	.regs{
		margin: 20px;
		padding-bottom: 50px;
		border-bottom: 1px dashed #ccc;
	}
	.regs p{

	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    font-size: 18px;
	    color: #fff;
	    background-color: #ff7e3e;
	}
	.reglast{
	    text-align: center;
	    line-height: 24px;
	    font-size: 14px;
	    color: #777;
	}
</style>