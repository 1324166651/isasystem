<template>
  <view class="idioms-item" @click="itemClick">
    <image :src="showImage" alt=""  />
		<text>{{name}}</text>
		<view class="icon">
			<image src="../../../static/img/home/转发.png"></image>
		</view>
<!--      <text>{{ goodsItem.title }}</text> -->
  </view>
</template>

<script>
export default {
  name: 'IdiomsListItem',
  props: {
    idiomsItem: {
      type: Object,
      default() {
        return {
				}
      },
    },
  },
	data(){
		return{
			name:null
		}
	},
  computed: {
    showImage() {
			this.name=this.idiomsItem.name
      return this.idiomsItem.pic || this.idiomsItem.show.img
    },
  },
  methods: {
	 // imageLoad() {
  //     this.$bus.$emit('itemImageLoad')
  //   },
    itemClick() {
			uni.navigateTo({
			    url: '/pages/detail/detail?id='+this.idiomsItem.Id
			})
    },
  },
}
</script>

<style scoped>
.idioms-item {
  padding-bottom: 80rpx;
  position: relative;
	height: 60%;
	font-size: 50rpx;
	font-family:"楷体";
}

.idioms-item image {
  width: 30%;
  border-radius: 10rpx;
	vertical-align:middle;
	margin-left: 30rpx;
}
.idioms-item text {
	margin-left: 100rpx;
}

.icon image{
	position: absolute;
	width: 50rpx;
	height: 50rpx;
	right: 30rpx;
	top: 77rpx;
}
</style>