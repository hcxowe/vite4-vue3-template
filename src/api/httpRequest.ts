import AxiosCX from '../utils/request'
import { ElMessage, ElLoading } from 'element-plus'

// 保存正在请求的url地址
let loadingURLs: string[] = []
const BASE_URL = ''
const TIME_OUT = 5000
let loadingInstance: any = null

const request = new AxiosCX({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
}, {
    responseInterceptor: response => {
        const index = loadingURLs.findIndex(url => url === BASE_URL + response?.config?.url?.slice(1))

        if (index !== -1) {
            if (loadingURLs.length === 1) {
                // 最后一条请求完成后关闭加载弹窗
                loadingURLs = []
                loadingInstance.close()
            } else {
                loadingURLs.splice(index, 1)
            }
        }

        if (response.data.code !== 0) {
            ElMessage.error({
                message: response.data.msg
            })
        }

        return response
    },
    /* 响应发生错误拦截 */
    responseInterceptorCatch: error => {
        let content = '请求失败, 请检查网络连接!'

        switch (error.response.status) {
            case 404:
                content = '请求地址不存在, 请确认请求地址是否存在或已删除'
                break

            case 500:
                content = '服务器发生错误, 请重试'
                break

            default:
                break
        }

        ElMessage.error({
            message: content
        })

        loadingInstance.close()

        return Promise.reject(error)
    }
})

function reAxios(options: any, loadingText?: string) {
    if (loadingText) {
        loadingURLs.push(BASE_URL + options.url.slice(1))
        loadingInstance = ElLoading.service({
            lock: true,
            text: loadingText,
            background: 'rgba(0, 0, 0, 0.7)',
            fullscreen: true
        })
    }

    return request.request(options)
}

export default reAxios
