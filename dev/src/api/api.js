import request from '@/utils/request'

class ApiService {

  async addApi(api) {
    return request({
      url: '/addApi',
      method: 'POST'
    })
  }

  async getApiLists() {
    return request({
      url: '/getApiLists',
      method: 'GET'
    })
  }
  
}

export default ApiService