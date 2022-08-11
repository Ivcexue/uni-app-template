import { HttpResponse } from '@/types/request'

const request = (config: UniApp.RequestOptions) => {
  const BASE_URL = import.meta.env.VITE_REQUEST_BASE_URL

  return new Promise<HttpResponse>((resolve, reject) => {
    uni.request({
      ...config,
      url: BASE_URL + config.url,
      timeout: config.timeout || 60000,
      header: {
        ...config.header,
        // showLoading: false,
        'Content-Type': 'application/json;charset=UTF-8'
      },
      success(res) {
        // 200状态码表示成功
        if (res.statusCode && res.statusCode !== 200) {
          uni.showToast({
            title: `api错误`,
            icon: 'none'
          })
          return
        }

        resolve(res.data)
      },
      fail(result) {
        reject(result)
      }
    })
  })
}

export default {
  /**
   * get请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  get: (url: string, options?: UniApp.RequestOptions) => {
    return request({
      ...options,
      url,
      method: 'GET'
    })
  },
  /**
   * post请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  post: (url: string, options?: UniApp.RequestOptions) => {
    return request({
      ...options,
      url,
      method: 'POST'
    })
  }
}
