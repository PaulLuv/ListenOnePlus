import * as logbox from "@/logbox";
import { SeverType } from "@/api";

export const defaultPageSize = 20;

let _tokenNetease: String | null = null;
let _tokenXiami: String | null = null;
let _tokenKugou: String | null = null;
let _tokenQQ: String | null = null;

export interface UserAuthState{
    /**
    * Token 值
    */
    token: String | null;
    /**
     * token 是否已经过期？
     */
    isTokenExp: boolean;
    /**
     * token 是否将要过期
     */
    isTokenWillExp: boolean;
}

export function getUserAutoState(type = SeverType.netease): UserAuthState{
    let token: string | null = null;
    let isTokenExp = true;
    let isTokenWillExp = true;
    return { token, isTokenExp, isTokenWillExp};
}

export interface ApiRequestOptions extends wx.RequestOptions {
    /**
     * 请求名称
     */
    reqName?: string;
}

export const globalApiHttpErrorHandlers = {};

export function apiRequest<R>(req: ApiRequestOptions): Promise<R>{
    return new Promise(function(resolve, reject){
        const method = req.method || "GET";
        const reqName = req.reqName || "";
        req.success = (resp: wx.Response) => {
            logbox.info(`[DONE][${reqName}][${method}][${req.url}] ${resp.statusCode} `);
            if(resp.statusCode == 200){
                const r = (resp.data as any) as R;
                resolve(r);
            }else{
                const handler = globalApiHttpErrorHandlers[resp.statusCode];
                if(handler && typeof handler === "function"){
                    handler();
                }
                reject("请求出差 " + resp.statusCode);
            }
        };
        req.fail = () => {
            logbox.error(`[FAIL][${reqName}][${method}][${req.url}]`);
            reject("请求出错");
        };
        wx.request(req);
    });
}
export function request(req: wx.Request): Promise<wx.Response> {
    return new Promise(function(resolve, reject){
        const options: wx.RequestOptions = {url: ""};
        Object.assign(options,req);
        const method = req.method || "GET";
        options.success = (res: wx.Response) => {
            logbox.info(`[DONE][${method}][${req.url}] ${res.statusCode} `, res.data);
        };
        options.fail = () => {
            reject("请求出错");
        };
        logbox.info(`[BEGIN][${method}][${req.url}] data:`, req.data);
        wx.request(options)
    });
}