const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const BaseController = require('../core/baseController')
const cmd = require('node-cmd')

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

    // 校验 id 是否重复
    for (const idx of this.index)
      if (idx.id == book.id)
        this.ctx.body = 'id exists'

    // 更新 index
    this.index.push(book)
    fs.writeFileSync(this.indexPath, yaml.dump(this.index), 'utf8')

    // 创建目录
    let dir = `${this.basePath}/${book.id}`
    await cmd.run(`mkdir ${dir}`)
    
    // 克隆 git 仓库
    await cmd.run(`git clone ${book.git} ${dir}`)

    // 初始化 gitbook
    await cmd.run(`cd ${dir} && gitbook build`)
    
    this.success('add book ok!')
  }

  async getBookList() {
    this.success(this.index)
  }

  async buildBook() {

    let { id } = this.ctx.params
    let dir = `${this.basePath}/${id}`
    
    // 克隆 git 仓库
    let pull = await cmd.run(`cd ${dir} && git pull`)
    console.log(pull)

    // 初始化 gitbook
    let build = await cmd.run(`cd ${dir} && gitbook build`)
    console.log(build)

    this.success('build ok!')
  }

  async deleteBook() {

    let { id } = this.ctx.params
    let dir = `${this.basePath}/${id}`

    console.log(id)
    // 从 index 中移除
    for (let i = this.index.length - 1; i >= 0; i--) {
      let book = this.index[i]
      if (id == book.id)
        this.index.splice(book, 1)
      console.log(this.index)
    }
    console.log(111111111111111)
    console.log(this.index)
    // fs.writeFileSync(this.indexPath, yaml.dump(this.index), 'utf8')

    // 从硬盘删除

    this.success('delete ok!')
  }

}

module.exports = WikiController