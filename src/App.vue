<template>
  <main class="main1">
  			<router-view></router-view>
  			<header class="nav">
  					 <div class="mynav">
  					 		<router-link to="/first">
		  					 	<span class='myicon'>
			  					 		<svg class="icon" aria-hidden="true">
										    	<use xlink:href="#icon-shouye"></use>
											</svg>
		  					 	</span>
									<p>首页</p>
  							</router-link>
  					 </div>
				  	 <div class="mynav">
				  	 		<router-link to="/resume">
						  	 	<span class='myicon'>
		  					 		<svg class="icon" aria-hidden="true">
									    	<use xlink:href="#icon-text"></use>
										</svg></span>
									<p>	简历</p>				  	 
				  	 		</router-link>
				  	 </div>
				  	 <div class="mynav">
					  	 	<router-link to="apply">
					  	 			<span class='myicon'>
		  					 		<svg class="icon" aria-hidden="true">
									    	<use xlink:href="#icon-xinfeng"></use>
										</svg></span>
										<p>申请记录</p>						  	 	
					  	 </router-link>
				  	 </div>
				  	 <div class="mynav">
				  	 	<router-link to="my">
				  	 		<span class='myicon'>
		  					 		<svg class="icon" aria-hidden="true">
									    	<use xlink:href="#icon-wode"></use>
										</svg></span>
								<p>我的</p>
				  	 </router-link>
				  	 </div>
				  	 <div class="mynav"><router-link to="download">
				  	 		<span class='myicon'>
	  					 		<svg class="icon" aria-hidden="true">
								    	<use xlink:href="#icon-xiazai"></use>
									</svg></span>
									<p>APP下载</p>				  	 	
				  	 </router-link></div>
	
  			</header>
  </main>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	stg:true,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="scss">
	html{
	}
	body{
		height: 100%;
				max-width: 500px;
		background-color: #eeeeee;
		margin: auto;
	}
	.nav{
		max-width: 500px;
	}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
