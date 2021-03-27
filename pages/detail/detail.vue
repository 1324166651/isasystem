<template>
	<view class="detail">
	<scroll-view
		:scroll-top="scrollTop1"
		scroll-y="true" 
		class="content"
		@scroll="scroll">
		<!-- 	
				@scrolltolower="lower"
		@scroll="scroll" -->
	 <detail-item :commentInfo="commentInfo" class="item"></detail-item>
	 <five-commentlist 
	 :commentList="commentList" 
	 @clickPraise="clickPraiseSig" 
	 @clickDelete="clickDeleteSig">
	 </five-commentlist>
	 <button @click="toggleMask('show')" class="buttom">请奉献出宝贵的评论,快来发布吧!</button>
	</scroll-view>
	<ygc-comment ref="ygcComment" 
	        :placeholder="'发布评论'" 
	        @pubComment="pubComment"></ygc-comment>	
					<text>{{commentContent}}</text>
		<my-fab-top :scrollTop="scrollTop" @click.native="goTop"></my-fab-top>
	</view>
	
</template>

<script>
	
	import FiveCommentlist from './five-commentlist/five-commentlist.vue'
	import DetailItem from './detailItem/DetailItem.vue'
	import ygcComment from '@/components/ygc-comment/ygc-comment.vue';
	import MyFabTop from "../../components/wppeng-top/wppeng-top.vue"
	export default {
		data() {
			return {
				commentInfo:{},
				commentList:[
					{
							"COMMENT_TIME": "2020-07-07 10:33:29",
							"FIRSTNICKNAME": "网友1271622",
							"IS_PRAISE": null,
							"TAG":"",
							"COMMENT": "挺有意思的",
							"PRAISE_NUM": 0,
							"CANDELETE": 1,
							"HEADIMGURL": "http://img2.imgtn.bdimg.com/it/u=2659658743,1944621503&fm=26&gp=0.jpg",
							"SECONDNICKNAME": null
						},
						{
							"COMMENT_TIME": "2020-07-07 10:32:52",
							"FIRSTNICKNAME": "网友3778839",
							"IS_PRAISE": null,
							"TAG":"",
							"COMMENT": "原来是这样来的啊",
							"PRAISE_NUM": 0,
							"CANDELETE": 0,
							"HEADIMGURL": "http://pic1.zhimg.com/50/v2-e88c0426c1ccc429dbedea3d01e5fac2_hd.jpg",
							"PARENTID": "1",
							"SECONDNICKNAME": null
					
						}
				],
				recommends: [],
				commentContent: '',
				scrollTop:0,
				scrollTop1:0
			}
		},
		components:{
			FiveCommentlist,
			DetailItem,
			ygcComment,
			MyFabTop
		},
		methods: {
			async getdetail(id){
				const res = await this.$getrequest({
					url:'getdetail?id='+id
				})
				
				this.commentInfo = res.data.list[0]
				console.log(this.commentInfo)
		},
		clickPraiseSig(){
			
		},
		toggleMask(type) {
			this.$refs.ygcComment.toggleMask(type);
		},
		pubComment(commentContent1) {
			this.$refs.ygcComment.toggleMask();
			console.log(commentContent1);
			this.commentContent = commentContent1;
			this.$refs.ygcComment.content = '';
		},
		scroll(position){
			this.scrollTop = position.detail.scrollTop
		},
		goTop() {
				this.scrollTop1 = this.scrollTop
				this.$nextTick(() =>{
						this.scrollTop1 = 0
				});
		}
	},
		onLoad(option) {
				this.getdetail(option.id)
		}
	}
</script>

<style scoped>
.detail{
	height: 100vh;
	text-align: center;
	background-image: url(../../static/img/detail/bgc.jpg);
	color: #F1F1F1;
	padding-top: 30rpx;
}
.content{
	height: 100vh;
}
.buttom{
	height: 80rpx;
	font-size: 30rpx;
	text-align:left;
	opacity: 0.7;
	border-radius: 15rpx;
}
</style>
