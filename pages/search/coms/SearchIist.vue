<template>
		<view class="search-list">
			<view v-for="(item,index) in searchlist" :key="index" @click="keywordsClick(item.id)">
			{{item.name}}
			</view>
		</view>	
</template>

<script>

export default {
  name: 'SearchList',
  props: {
    searchlist: {
      type: Array,
      default() {
        return []
      },
    },
  },
	methods:{
		keywordsClick(id){
			uni.navigateTo({
			    url: '/pages/detail/detail?id='+id
			})
		}
	}
}
</script>

<style>
.search-list{	
	border-left:#F7F7F7 7rpx solid;
	border-right:#F7F7F7 7rpx solid;
}
.search-list :last-child{
	border-bottom:#F7F7F7 7rpx solid;
}
.search-list view{
	
	width: 100%;
	color: #8A8A8A;
	font-size: 28upx;
	box-sizing: border-box;
	text-align: center;
	padding: 20upx 0;
	border-top: 2upx solid #FFF;
	border-left: 2upx solid #FFF;
	overflow: hidden;	
	white-space: nowrap;
	text-overflow: ellipsis;
	background-color: #FFFFFF;
}
</style>
