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
  
}

export default WikiService