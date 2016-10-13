<template lang="html">
	<div class="hotelIntroduce" v-if='thisHotel != ""' >
		<!-- headder -->
		<div class="header">
			<div class="banner">
				<img :src="thisHotel.banners[0]" alt="">
				<div class="hotelName">
					<p>{{thisHotel.name}}</p>
					<div>
						<label>{{thisHotel.type}}</label>
						<i class="fa fa-star" aria-hidden="true" v-for=" item in thisHotel.score"></i>
					</div>
				</div>
			</div>
			<div class="address">
				<p>{{thisHotel.address.city}}&nbsp;&nbsp; {{thisHotel.address.district}}&nbsp;&nbsp; {{thisHotel.address.street}}</p>
				<!-- <span>距离您1.1公里</span> -->
				<i class="fa fa-map-marker" aria-hidden="true"></i>
			</div>
		</div>
		<!-- center -->
		<div class="center">
			<p>酒店设施</p>
			<ul>
				<li><i class="yo-ico">&#xe604</i><span>免费WIFI</span></li>
				<li><i class="yo-ico">&#xe605</i><span>免费停车</span></li>
				<li><i class="yo-ico">&#xe606</i><span>热水</span></li>
				<li><i class="yo-ico">&#xe607</i><span>电视</span></li>
			</ul>
		</div>
		<!-- footer -->
		<div class="footer">
			<p>酒店简介</p>
			<!-- <p><span>开业时间：2016.05.26</span><span>装修时间：2016.02.01</span></p> -->
			<p :class="{h: !isShowMore}">
				{{thisHotel.memo}}
			</p>
			<div class="more"><span @click="isShowMore = !isShowMore" v-text='!isShowMore ? "显示更多" : "收起"'></span><i class="fa fa-angle-down" :class="{trans: isShowMore}"  @click="isShowMore = !isShowMore" aria-hidden="true"></i></div>
		</div>

	</div>
</template>
<script src="../scripts/hotelIntroduce.js" charset="utf-8"></script>

<style lang="sass">
	@import "../../assets/styles/common.scss";
	@import "../styles/HotelIntroduce.scss";
</style>
