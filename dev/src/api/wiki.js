import request from '@/utils/request'

class WikiService {

  async addBook(book) {
    return request({
      url: '/wiki/addBook',
      method: 'POST',
      data: book
    })
  }

  async getBookList() {
    let res = await request({
      method: 'GET',
      url: '/wiki/getBookList',
    })
    return res.data.data
  }

  async buildBook(id) {
    let res = await request({
      method: 'PUT',
      url: `/wiki/${id}/buildBook`,
    })
    return res.data.data
  }

  async deleteBook(id) {
    let res = await request({
      method: 'DELETE',
      url: `/wiki/${id}/deleteBook`,
    })
    return res.data.data
  }
  
}

export default WikiService