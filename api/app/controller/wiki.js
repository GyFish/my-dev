const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const BaseController = require('../core/baseController')

class WikiController extends BaseController {

  constructor(ctx) {
    super(ctx)
    this.basePath = path.join(this.ctx.app.baseDir, '/app/public/wiki')
    this.indexPath = path.join(this.ctx.app.baseDir, '/app/public/wiki/index.yaml')
    this.index = yaml.safeLoad(fs.readFileSync(this.ctx.app.baseDir + '/app/public/wiki/index.yaml', 'utf8'))
  }

  async addBook() {
    
    console.log('add book...')
    let book = this.ctx.request.body

    // 更新 index
    this.index.push(book)
    fs.writeFileSync(this.indexPath, yaml.dump(this.index), 'utf8')

    // 拉取 git 仓库


    // 初始化 gitbook
    
    this.success('add book ok!')
  }

  async getBookList() {
    this.success(this.index)
  }

}

module.exports = WikiController