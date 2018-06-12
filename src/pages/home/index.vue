<template>
  <div class="page">
    <view class="weui-cells__title">WeuiInputCodeCell 使用示例</view>
    <view class="weui-cells weui-cells_after-title">
     <weui-input-code-cell label="手机号" placeholder="请输入手机号" buttonlabel="获取验证码"
        @focus="bindfocus"
        @blur="bindblur"
        @input="bindinput"
        value=""
     />
    </view>
    <view class="weui-cells__title">WeuiCell 使用示例</view>
    <view class="weui-cells weui-cells_after-title">
      <weui-cell title="标题文案"  detail="说明文案" />
      <weui-cell icon="/static/images/ic_warn_outline.png" title="标题文案"  detail="说明文案" />
      <weui-cell title="标题文案"  access="true"/>
      <weui-cell title="标题文案" detail="说明文字"  access="true"/>
      <weui-cell icon="/static/images/ic_warn_outline.png" title="标题文案"  detail="说明文案" access="true"/>
    </view>

    <view class="weui-cells__title">WeuiInputCell 使用示例</view>
    <view class="weui-cells weui-cells_after-title">
      <weui-input-cell label="QQ" placeholder="请输入 QQ 号"
        @focus="bindfocus"
        @blur="bindblur"
        @confirm="bindconfirm"
        @input="bindinput"
        value="123"
      />
    </view>

    <view class="weui-cells__title">WeuiSwitchCell 使用示例</view>
    <view class="weui-cells weui-cells_after-title">
      <weui-switch-cell title="开头说明" />
      <weui-switch-cell title="兼容模式" checked />
    </view>

    <view class="weui-cells__title">WeuiCheckboxCell 使用示例</view>
    <view class="weui-cells weui-cells_after-title"> 
      <weui-checkbox-cell title="南瓜" />
      <weui-checkbox-cell title="大西瓜" checked />
    </view>

    <view class="weui-cells__title">WeuiRadioGroupCell 使用示例</view>
      <view class="weui-cells weui-cells weui-cells_after-title">
      <weui-radio-group title="请选择地区" :items="items" />
      </view>
  </div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style lang="less">
@import "~@/styles.less";
</style>
