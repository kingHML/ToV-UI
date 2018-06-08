import { axiosAjax } from '../../common/commonApi'

export default {
  getHouseList (params) {
    return axiosAjax('rabbit/v1/city-report/pieChart', 'get', {params: params})
  }
}
