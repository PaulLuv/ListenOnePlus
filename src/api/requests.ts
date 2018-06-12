import * as logbox from "@/logbox";
import * as m from "./models";

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

