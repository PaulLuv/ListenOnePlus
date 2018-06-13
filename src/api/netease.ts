
import * as logbox from "@/logbox";
import { ApiRequestOptions, apiRequest } from '@/api/helper';

export class Netease implements Music{
  constructor (){

  }
  /**
   * 热门推荐
   */
  getRecommend(): Array<Object>{
    let target_url = 'http://music.163.com/discover/playlist/?order=' + "hot";

    return [];
  }

  getLyric(id: Number){
    const target_url = 'http://music.163.com/weapi/song/lyric?csrf_token=';
    const method = 'GET';
    const data = {
      'id': id,
      'lv': -1,
      'tv': -1,
      'csrf_token': '',
    };
    const cookie = "";
    const header = {
      Accept: "*/*",
      "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: cookie,
    };
    // let data = this._encrypted_request(d);
    const options: ApiRequestOptions = {
      url: target_url,
      method: method,
      data: data,
      header: header
    }
    return apiRequest(options);
  }
}

const hostNetease = "music.163.com";

