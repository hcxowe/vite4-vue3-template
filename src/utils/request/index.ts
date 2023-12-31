import { Axios, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface InterceptorHooks {
    requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any

    responseInterceptor?: (response: AxiosResponse) => AxiosResponse
    responseInterceptorCatch?: (error: any) => any
}

class AxiosCX extends Axios {
    constructor(config: AxiosRequestConfig, interceptorHooks: InterceptorHooks) {
        super(config)

        // 添加实例独有的请求拦截器
        this.interceptors.request.use(
            interceptorHooks?.requestInterceptor,
            interceptorHooks?.requestInterceptorCatch
        )

        // 添加实例独有的响应拦截器
        this.interceptors.response.use(
            interceptorHooks?.responseInterceptor,
            interceptorHooks?.responseInterceptorCatch
        )
    }

    downloadImage(config: AxiosRequestConfig) {
        return this.request(config).then(response => {
            if (response.status == 200) {
                // 下载图片代码

                return Promise.resolve()
            }
        })
    }
}

export default AxiosCX