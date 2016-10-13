<style scoped>
	.cover {
	    position: fixed;
	    z-index: 1;
	    left: 0;
	    top: 0;
	    width: 100vw;
	    height: 100vh;
	    background-color: rgba(0,0,0, 0.8);
	    
	}
</style>
<template>
	<div class="cover">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isShow: true,
				title: '123',
			};
		},
	}
</script>