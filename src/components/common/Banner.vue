<template>
    <div class="banner">
        <image class="image" :mode="scaleToFill" :src="banners[banners.length -1].icon"/>
        <div v-for="(banner,index) in banners" :key="index">
            <image class="image" :mode="scaleToFill" :src="banner.icon"/>  
        </div>
        <image class="image" :mode="scaleToFill" :src="banners[0].icon"/>
        <div class="index_group">
            <div v-for="(banner,index) in banners" :key="index">
                <div class="index" v-bind:class="{index_active : index === active_index}">
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
  data() {
    return {
      active_index: 0,
      length: this.banners.length
    };
  },
  onLoad() {
    setInterval(function() {
      if (this.active_index < this.length) {
        this.active_index++;
      }
    }, this.duration);
  },

  props: {
    banners: {
      type: Array,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  }
};
</script>

<style lang="less">
.banner {
  position: relative;
  width: 100%;
  height: 180px;
  background: #eeeeee;
}
.image {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.index_group {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  top: 160px;
  margin-bottom: 10px;
}
.index {
  width: 8px;
  height: 8px;
  margin: 2px;
  border-radius: 4px;
  background: color(white);
}
.index_active {
  background: color(red);
}
</style>
