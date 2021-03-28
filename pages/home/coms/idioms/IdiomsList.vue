<template>
  <view class="idioms">
    <idioms-list-item
      v-for="(item, index) in idioms"
      :idioms-item="item"
      :key="index"
    ></idioms-list-item>
  </view>
</template>

<script>
import IdiomsListItem from './IdiomsListItem'

export default {
  name: 'IdiomsList',
  components: {
    IdiomsListItem,
  },
  props: {
    idioms: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
.idioms {
	height: 300rpx;
}
</style>
