import { Vue, Component } from "vue-property-decorator";
import * as store from "@/store";
import eventBus from "@/eventBus";
import * as mpex from "@/mpex";
import * as logbox from "@/logbox";
import { getLyric,Netease } from '@/api';

// 必须使用装饰器的方式来指定component
@Component({
  components: {

  }
})
class Index extends Vue implements mp.VueLifecycle, mp.PageLifecycle {
  songList = [];
  lyric: {};
  items = [
    { name: "USA", value: "美国", checked: false },
    { name: "CHN", value: "中国", checked: true },
    { name: "BRA", value: "巴西", checked: false },
    { name: "JPN", value: "日本", checked: false },
    { name: "ENG", value: "英国", checked: false },
    { name: "TUR", value: "法国", checked: false }
  ];

  onLoad(options){
    this.loadData();
  }

  async loadData(){
    try{
      const resp = await getLyric(347230);
      if(resp.code == 0 && resp.data){
        this.lyric = resp.data
        logbox.info("请求成功" + this.lyric)
      }else{
        mpex.confirm(resp.message);
        logbox.info("请求失败" + this.lyric)
      }
    }catch(error){
      mpex.confirm("请求出错");
      logbox.info("请求出错" + this.lyric)
    }
  }
  onShow() {
    // 小程序 hook
    logbox.info("onShow");
  }

  mounted() {
    // vue hook
    logbox.info("mounted");
  }

  bindinput(e) {
    console.info("bindinput ", e);
  }
  bindfocus(e) {
    logbox.info("bindfocus ", e);
  }
  bindblur(e) {
    logbox.info("bindblur ", e);
  }
  bindconfirm(e) {
    logbox.info("bindconfirm ", e);
  }
}

export default Index;
