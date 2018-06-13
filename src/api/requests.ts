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

    const url = 'http://music.163.com/weapi/song/lyric?os=osx&id=347230&lv=-1&kv=-1&tv=-1'
    const options: ApiRequestOptions = {
        url,
        method: "POST",
        reqName: ""
    };
    options.header = {
        Authorization: getAuthorization() || ""
    };

    return apiRequest<GetLyricResponse>(options);
}