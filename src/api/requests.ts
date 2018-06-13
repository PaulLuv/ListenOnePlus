import * as logbox from "@/logbox";
import * as m from "./models";
import {getAuthorization, ApiRequestOptions, apiRequest } from '@/api/helper';

const protocalHttp = "http";
const protocalHttps = "https";

const hostNetease = "music.163.com";
const hostXiami = "www.xiami.com";
const hostKugou = "www.kugou.com";
const hostQQ = "y.qq.com"

const basePath = "/v1"
const baseUrlNetease = '${protocalHttp}://${hostNetease}${basePath}';
const baseUrlXiami = '${protocalHttp}://${hostXiami}${basePath}';
const baseUrlKugou = '${protocalHttp}://${hostKugou}${basePath}';
const baseUrlQQ = '${protocalHttps}://${hostQQ}${basePath}';

export interface GetLyricResponse extends m.CommonResp{
    data? : {}
}
export function getLyric(
    id: Number
): Promise<GetLyricResponse>{

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
    return apiRequest<GetLyricResponse>(options);
}
