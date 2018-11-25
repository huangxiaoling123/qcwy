<template>
	<main>
		<div class="beijing3">
			<div class="pgz"><p><span>!</span>关注<span>前程无忧51Job公众号</span>查看投递进度</p></div>
			<div class="apply-job">
				<ul class="apply-list">
					<li v-for="(v,i) in soc">
						<p>{{v.addr}}</p>
						<h3>{{v.title}}</h3>
	
						<span>{{v.comp}}</span>
						<span class="compic"><img src="../../assets/img/arrow.png"/></span><br />
						<span>{{v.apply}}</span>
						<span class="apply-time">{{v.time}}</span>
						<hr />
						<span>{{v.td}}</span>
						<span class="apply-jd">{{v.jindu}}</span>
						<span class="apply-jz">竞争力分析</span>
						<span class="apply-td">投递进度</span>
	
					</li>
				</ul>
			</div>		
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				soc:{}
			}
		},
		mounted(){
			this.socl()
		},
		methods:{
			socl(){
				this.$http.get('../../../static/data.json').then((response)=>{
					this.soc=response.data.social
				})
			}		
		}
	}		
</script>

<style>
	.beijing3{
		background: #FFFFFF;
	}
	.pgz{
		line-height: 30px;
	    font-size: 12px;
	    color: #858585;
	    padding: 0 21px;
	    background-color: #fff2e3;
	}
	.pgz>p>span:nth-of-type(1){
    display: inline-block;
    width: 14px;
    height: 14px;
    line-height: 14px;
    text-align: center;
    border: 1px solid #858585;
    border-radius: 50%;
		
	}
	.pgz>p>span:nth-of-type(2){
		color: #ff7e3e !important;
	}
	
	
	
	.apply-job{
		background: #ebebeb;

	}
	.apply-list{


		
	}
	.apply-job h3{
	    height: 22px;
	    line-height: 22px;
	    font-weight: bold;
	    font-size: 16px;
	    color: #444444;		
	}
	.apply-job span{
		font-size: 12px;
    	color: #868686;
	}
	.apply-job p{
		font-size: 12px;
   		color: #868686;
   		line-height: 20px;
	}
	.apply-job p:nth-of-type(1){
		float: right;
	}
	.apply-list>li{
		background: #FFFFFF;
		padding: 15px 35px 15px 22px;		
		margin-top: 5px;
	}
	.compic{
		float: right;
	}
	.compic>img{
		position: relative;
		width: 8px;
		top: 2px;
		right: -15px;
	}
	.apply-time{
		float: right;
	}
	.apply-job hr{
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.apply-jd{
		color: #ff773e !important;
	}
	.apply-jz,.apply-td{
		float: right;
		width: 75px;
    	height: 28px;
    	line-height: 28px;
    	color: #ff7e3e !important;
    	text-align: center;
        border: 1px solid #ff7e3e;
        border-radius: 5px;
        position: relative;
        right: -15px;
	}
</style>