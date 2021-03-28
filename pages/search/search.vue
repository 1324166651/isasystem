<template>
	<view>
		<zy-search :is-focus="true" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText" :list="list" class="zy-search"></zy-search>
		 <search-list :searchlist="searchlist" class="searchlist"></search-list>
	</view>
</template>

<script>
	import zySearch from './coms/zy-search.vue'
	import SearchList from './coms/SearchIist.vue'
	export default {
		components: {
			zySearch,
			SearchList
		},
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['背水一战','草木皆兵','指鹿为马','四面楚歌']	,//初始化推荐列表
				searchlist:[]
			}
		},
		computed: {
			showSearch() {
				return this.list
			},
		},
		methods: {
			async getSearchText(name) {
			const res = await this.$getrequest({
				url:'getsearch?name='+name
			})
			this.searchlist = res.data.list
			
			if(this.searchlist.length==0){
				uni.showToast({
					title:'未搜索到此结果 ',
					icon:"none"	
				})
			}
			}
		},
	}
</script>

<style>

.searchlist{
	position: absolute;
	top:80rpx;
	right:0;
	left:0;	
	width: 85.2vw;
	margin: auto;
}
</style>
