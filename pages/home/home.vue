<template>
	<view class="home">
	<tab-control
		class="tabcontrol"
		:titles="['常用熟语', '时代热语', '生僻成语']"
		@tabClick="tabClick"
		ref="tabControl1"
		v-show="isfixed"
	/>
	<scroll-view  
	  :scroll-top="scrollTop1"
		scroll-y="true" 
		class="content" 
		@scrolltolower="lower"
		@scroll="scroll">
		<view>
			<text>每日推荐</text>
		</view>
<!-- 		<swiper indicator-dots circular autoplay easing-function="linear" >
			<swiper-item v-for="item in swipers"  :key="item.id">
					<image :src="item" @load="swiperImageLoad"></image>
			</swiper-item>
		</swiper> -->
		<bw-swiper :swiperList="swipers" class="width:100%"></bw-swiper>
		<view class="he">
		<tab-control
			class="tabcontrol"
			:titles="['常用熟语', '时代热语', '生僻成语']"
			@tabClick="tabClick"
			ref="tabControl2"
		/>
		</view>
		 <idioms-list :idioms="showIdioms" />
 </scroll-view>
		<view class="text"><text>推荐读物</text>
			<image src="../../static/img/home/推荐读物.jpg"></image>
		</view>
		<my-fab-top :scrollTop="scrollTop" @click.native="goTop" ></my-fab-top>	
	</view>
</template>
<script>
	import TabControl from "./tabControl/TabControl.vue"
	import IdiomsList from "./idioms/IdiomsList.vue"
	import MyFabTop from "../../components/wppeng-top/wppeng-top.vue"
	import bwSwiper from '@/wxcomponents/bw-swiper/bw-swiper.vue'
	export default {
		data() {
			return {
				swipers: [],
				idioms:{
				idioms1:  {page:0,list:[]},
				idioms2:  {page:0,list:[]} ,
				idioms3:  {page:0,list:[]} ,	
				},
				currentType: 'idioms1',
				isfixed: false,
				tabOffSetTop:0,
				isLoad: null,
				scrollTop:0,
				scrollTop1:0
				}
		},
		computed: {
			showIdioms() {
				return this.idioms[this.currentType].list
			},
		},
		components:{
			TabControl,
			IdiomsList,
			MyFabTop,
			bwSwiper
		},
		methods: {
			//获取轮播的接口
			async getSwiper(){
				const res = await this.$getrequest({
					url:'getidiom'
				})
				//遍历数组取出pic
				for(let index = 0;index<=3;index++) {  
					const ace ={
						img:res.data.list[index].pic
					}
				   this.swipers.push(ace)
				};
			},
			async getidiom1(type,page){
					page=parseInt(page)
				const geturl='getidiomtype/'+type+'/'+page;
				const res = await this.$getrequest({
					url:geturl,
				})
				// 	console.log(res)
				this.idioms[type].list.push(...res.data.list)
				this.idioms[type].page += 1
				//遍历数组取出pic
				// this.idioms.idioms1 = res.data.list
			},
			
			// getidiom1(type){
				
			// const page = this.goods[type].page + 1
			// this.getidiom1(type,page).then((res) = > {
			// 		this.idioms[type].list.push(...res.data.list)
			// 		this.idioms[type].page += 1
			// 	})	
			// }
			// getSwiper(){
			// 	uni.request({
			// 		url:'http://152.136.185.210:7878/api/m5/home/multidata',
			// 		success:function(res){
			// 			console.log(res)
			// 		}
			// 	})
			// }
			gets(i){
				this.getidiom1(this.currentType,i+1)
			},
			tabClick(index) {
					// 三种类型的index表示
					switch (index) {
						case 0:
							this.currentType = 'idioms1'
							break
						case 1:
							this.currentType = 'idioms2'
							break
						case 2:
							this.currentType = 'idioms3'
							break
					}
					// 是两个tabcontrol同步类型
					this.$refs.tabControl1.currentIndex = index
					this.$refs.tabControl2.currentIndex = index
				},
				scroll(position){
					this.isfixed = position.detail.scrollTop > this.tabOffSetTop
					this.scrollTop = position.detail.scrollTop
				},
				swiperImageLoad() {
					if(!this.isLoad){
						 let that = this
				    uni.getSystemInfo({
						success: (res) =>{ // res - 各种参数
						 let info = uni.createSelectorQuery().select(".he");// 获取某个元素
						 info.boundingClientRect(function(data) { 
						 that.tabOffSetTop=data.top	
						 }).exec()
					}})
						 this.isLoad = true
					}	
				},
			lower(){
			this.gets(this.idioms[this.currentType].page)	
			},
			goTop() {
					this.scrollTop1 = this.scrollTop
					this.$nextTick(() =>{
							this.scrollTop1 = 0
					});
			}
		},
		onLoad(){
			this.getSwiper()
			this.getidiom1('idioms1',1)
			this.getidiom1('idioms2',1)
			this.getidiom1('idioms3',1)
	},
		onPageScroll(res){
				this.scrollTop=res.scrollTop
		},
	}
</script>

<style>
.home{
	height: 100vh;
	position: relative;
	font-size: 50rpx;
	font-family:"楷体";
}
.home image{
	height: 100%;
	width: 100%;
}
.home view text :not(.){
	height: 100rpx;
	line-height: 100rpx;
	padding-left: 30rpx;
}
.tabcontrol {
  position: relative;
	display: block;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
	top: 0;
  bottom: 100rpx;
  left: 0;
  right: 0;
	z-index: 1;
}
.text{
	position:absolute;
	bottom: 0;
	height: 100rpx;
}
.text image{
	width: 100vw;
	height: 1200rpx;
}

</style>
