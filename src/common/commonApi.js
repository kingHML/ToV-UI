import axios from 'axios'
import { baseUrl } from '../config'

/**
 * commonjs for ajax request
 * @params url send request address
 * @param method send request method
 * @param options send request other config
 * @author hzb@jiagouyun.com
 */
export function axiosAjax (url, method, options) {
  let defaultOptions = {
    url: url,
    method: method || 'GET',
    timeout: 50000,
    baseURL: baseUrl.apiUrl
  }
  if (options) {
    defaultOptions = Object.assign({}, defaultOptions, options)
  }
  return new Promise((resolve, reject) => {
    axios(defaultOptions).then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log('err', err)
      reject(err)
    })
  })
}
