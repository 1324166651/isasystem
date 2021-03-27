<template>
<!-- 		<view>
			<text>你好，李银河</text>
		</view>
		<view>
			<text selectable>你好， 李银河</text>
		</view>
		<view>
			<text space="emsp">你好， 李银河</text>
		</view>
		<view>
			<text space="ensp">你好， 李银河</text>
		</view>
		<view>
			<text space="nbsp" style="font-size: 20px;">你好， 李银河 &amp</text>
		</view>
		<view  class="box" hover-class="box1" :hover-start-time="1000" :hover-stay-time="1000">
			<text selectable>你好， 李银河</text>
			<!-- view hover image 等查文档 -->
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.box{
	width: 100px;
	/* rpx响应式单位 文字样式也可设置成rpx */
	height: 100rpx;
	background-color: #007AFF;
}
.box1{
	width: 150px;
	height: 150px;
	background-color: #007AFF;
}
</style>
