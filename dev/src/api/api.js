import request from '@/utils/request'

class ApiService {

  async addApi(api) {
    return request({
      url: '/api/addApi',
      method: 'POST'
    })
  }

  async getApi(id) {
    return await request({
      method: 'GET',
      url: '/api/getApi',
      param: id
    })
  }

  async getApiList() {
    return await request({
      method: 'GET',
      url: '/api/getApiList',
    })
  }
  
}

export default ApiService