<template>
	<main>
		<div class="hxl">
			<div class="hxlfo">
				<div class="info-pic">
					<img src="../../assets/img/woman.png"/>
				</div>
				<p>黄小玲</p>
				<p>广州|18|1年工作经验</p>
			</div>
		</div>
		
		<div>
			<ul class="hxl-list">
				<li>{{arr1[0]}}<p>共<span>0</span>条</p></li>
				<p class="bg3"></p>
				<li>{{arr1[1]}}<p>共<span>1</span>条</p></li>
				<li>{{arr1[2]}}<p>共<span>2</span>条</p></li>
				<li>{{arr1[3]}}</li>
				<li>{{arr1[4]}}</li>
				<li>{{arr1[5]}}<p>共<span>1</span>条</p></li>
				<li>{{arr1[6]}}</li>
				<li>{{arr1[7]}}</li>
				<li>{{arr1[8]}}</li>
				<p class="bg3"></p>
				<li>{{arr1[9]}}</li>
				<p class="bg3"></p>
			</ul>
		</div>
		
	</main>
</template>

<script type="text/javascript">
	import { Toast } from 'mint-ui'
	export default{
		data(){
			return{
				arr1:[],
				info:[],
			}
		},
		mounted(){
			this.change()
		},
		methods:{
			change(){
				this.$http.get('../../../static/data.json').then((response)=>{
					this.arr1=response.data.my;
					this.info=response.data.info;
//					console.log(response.data.my);
					console.log(response.data.info)
				})
			}
		},


	}
</script>

<style>
	.hxl{
		height: 135px;
		overflow: hidden;
		background-color: #ff7e3e;
	    background: linear-gradient(to right,#ff773e,#ffbb3e);
	}
	.hxlfo{
		height: 130px;
		padding-top: 10px;
		background-image: url(../../assets/img/yh_bg.png);
		background-size: 100%;
		z-index: 3;
	}
	.hxlfo .info-pic{
		
		margin: auto;
		width: 62px;
		height: 62px;
		overflow: hidden;
		background: #FFFFFF;
		border-radius: 50%;
	}
	.hxlfo>div>img{

		width: 95%;
	}
	.hxlfo>p{
		color: #fff;
	    text-align: center;
	    font-size: 14px;
	    line-height: 24px;
	}
	.hxl-list{
		margin-bottom: 65px;
		background: #FFFFFF;
	}
	.hxl-list>li{
		height: 48px;
		line-height: 48px;
		font-size: 14px;
		color: #444;
		padding-left: 50px;
		padding-right: 50px;
		position: relative;
		border-bottom: 1px solid #EEEEEE;
	}
	.hxl-list>li:after{
		content: "";
		display: block;
		background-image:url(../../assets/img/arrow.png);
		background-size: 100%;
		position: absolute;
		width: 8px;
		height: 14px;
		top: 50%;
		margin-top: -6px;
		right: 25px;
	}
	.hxl-list>li>p{
		text-align: right;
	}
	.hxl-list>li span{
		color: red;
	}
	.bg3{
		height: 3px;
		background: #EEEEEE;
	}
	.hxl-list>li:before{
		content: "";
		display: block;
		position: absolute;
		background-image: url(../../assets/img/icon_my.png);
		background-repeat: no-repeat;
		background-size: 48px;
		width: 24px;
		height: 24px;
		top: 12px;
		left: 20px;
	}
	.hxl-list>li:nth-of-type(1):before{
		background-position: 0px 0px;
	}
	.hxl-list>li:nth-of-type(2):before{
		background-position: 0px -22px;
		/*left: 20px*/
	}
	.hxl-list>li:nth-of-type(3):before{
		background-position: 0px -45px;

	}
	.hxl-list>li:nth-of-type(4):before{
		background-position: -1px -68px;

	}
	.hxl-list>li:nth-of-type(5):before{
		background-position: 0px -92px;

	}
	.hxl-list>li:nth-of-type(6):before{
		background-position: -23px 0px;

	}
	.hxl-list>li:nth-of-type(7):before{
		background-position: -23px -20px;

	}
	.hxl-list>li:nth-of-type(8):before{
		background-position: -23px -45px;

	}
	.hxl-list>li:nth-of-type(9):before{
		background-position: -23px -70px;

	}
	.hxl-list>li:nth-of-type(10):before{
		background-position: -23px -95px;

	}
</style>