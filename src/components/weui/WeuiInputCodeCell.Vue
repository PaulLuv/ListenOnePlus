<template>
    <view class="weui-cell weui-cell_input weui-cell_vcode">
        <view class="weui-cell__hd" v-if="label">
        <view class="weui-label">{{label}}</view>
    </view>
    <view class="weui-cell__bd">
      <input class="weui-input"
      type="text"
      v-model="inputValue"
      :placeholder="placeholder"
      :placeholder-style="placeholderStyle"
      :placeholder-class="placeholderClass"
      :disabled="disabled"
      :maxlength="maxlength"
      :cursor-spacing="cursorSpacing"
      :focus="focus"
      :confirm-type="confirmType"
      :confirm-hold="confirmHold"
      :cursor="cursor"
      :selection-start="selectionStart"
      :selection-end="selectionEnd"
      :adjust-position="adjustPosition"
      @focus="bindfocus"
      @blur="bindblur"
      @confirm="bindconfirm"
       />
    </view>
    <view class="weui-vcode-btn" @click="bindClick">{{buttonlabel}}</view>
</view>
</template>
<script>
export default {
  data() {
    return {
      inputValue: this.value
    };
  },
  props: {
    label: {
      type: String,
      default: "手机号"
    },
    placeholder: {
      type: String,
      default: "请输入手机号"
    },
    value: {
      type: Number
    },
    buttonlabel: {
      type: String,
      default: "获取验证码"
    },
    countdowntime: {
      type: Number,
      default: 120
    }
  },
  watch: {
    inputValue(val) {
      this.$emit("input", val);
      console.info("current value:", val);
    }
  },
  methods: {
    mounted() {
      console.info("WeuiInputCodeCell created");
    },
    bindClick(e) {},
    bindfocus(e) {
      this.$emit("focus", e);
    },
    bindblur(e) {
      this.$emit("blur", e);
    }
  }
};
</script>

<style lang="less">
</style>