<template>
    <view class="weui-cell weui-cell_select">
      <view class="weui-cell__bd">
        <picker @change="bindAccountChange" value="{{accountIndex}}" range="{{accounts}}">
          <view class="weui-select">{{accounts[accountIndex]}}</view>
        </picker>
      </view>
    </view>
    
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {},
  watch: {},
  methods: {}
};
</script>

<style lang="less">
</style>
