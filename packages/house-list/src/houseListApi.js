import { axiosAjax } from '../../common/commonApi'

export default {
  getHouseList (params) {
    return axiosAjax('/rabbit/v1/new-estate/search', 'get', {params: params})
  },
  // 获取估价详情
  getHouseAssessDeatil (params) {
    return axiosAjax('/rabbit/v1/house/fetched-estate-info', 'get', {params: params})
  }
}
