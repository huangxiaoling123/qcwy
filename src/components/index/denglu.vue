<template>
	<main>
		<div class="myname">
			<input type="text" id="" value="" placeholder="请输入手机号码/邮箱/用户名"/><br />
			<input type="text" class="pass" value="" placeholder="请输入密码"/>	
			<p></p>
		</div>		
	</main>

</template>

<script>
</script>

<style>
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
    	margin-left: 5%;
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
	    right: 20px;
	}
</style>