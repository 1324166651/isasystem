<template>
	<view >
	<text class="name">{{commentInfo.name}}</text>
	<text class="time">{{time}} | 制作方:成语科普本小编</text>
	<text class="matter">{{commentInfo.matter}}</text>
	</view>
</template>

<script>
import { renderTime } from '@/utils/utils.js'
export default {
  name: 'DetailItem',
  props: {
    commentInfo: {
      type: Object,
			default: {}
    },
  },
	data(){
		return {
			time:null
		}
	},
	mounted() {
		this.time = renderTime(this.commentInfo.created_time)
	}
}
 
</script>

<style scoped>
.name{
	display: block;
	font-family: "华文行楷";
	font-size: 80rpx;
}
.time{
	display: block;
	font-size: 30rpx;
  font-family: "微软雅黑";
}
.matter{
	display: block;
	padding-top: 30rpx;
	font-size: 40rpx;
	font-family: "宋体";
	text-align: left;
	text-indent: 2em;
}

</style>
