<template>
  <view class="tab-control">
    <view
      v-for="(item, index) in titles "
      class="tab-control-item"
			:key="index"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <text>{{ item }}</text>
    </view>
	</view>
</template>

<script>
	export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    },
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  background-color: #FFFFFF;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item text {
  padding: 10rpx;
}
.active text {
  color: #EE4000;
  border-bottom: 6rpx solid #EE2C2C;
}
</style>
