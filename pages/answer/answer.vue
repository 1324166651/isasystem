<template>
	<view class="bar">
		 <text>答题课堂</text>
		 <button type="warn" @tap="goStandard" plain="true">练习模式</button>
		 <button type="warn" @tap="goAnswer" plain="true">模拟考试</button>
		 <button type="warn" plain="true">错题集</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
		
			if (option.token && uni.getStorageSync('token') != option.token) {
				uni.setStorage({
					key: 'token',
					data: 'option.token',
					success: function() {
						location.reload()
					}
				});
			}
		},
		methods: {
			goStandard() {
				// 标准练习
				uni.navigateTo({
					url: '/pages/answer/practice'
				})
			},
			goAnswer() {
				// 模拟考试
				uni.navigateTo({
					url: ''
				})
			},
		}
	}
</script>

<style>
body{
	background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2015%2F0331%2Fe049cce808416cf72b1f0a14ba72264a.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619329124&t=accc88941096c2713c3af4cc6464fb8d);
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	
	}
.bar{
	position: fixed;
	bottom:10%;
	width: 100vw;
	text-align: center;
	
	}
.bar text{
	display: block;
	height: 500rpx;
	line-height: 500rpx;
	font-size: 80rpx;
	font-family: "黑体";
	color: #F0AD4E;
}
.bar button{
	width: 100%;
		background-color: #EEE685;
		color: #EEE685;
}
</style>
