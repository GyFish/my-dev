const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const Controller = require('egg').Controller

class ApiController extends Controller {

    /* api ************************************************************/

    async addApi() {

      let file = path.join(basePath, 'idx-api.yaml')
      let idx = yaml.safeLoad(fs.readFileSync(file, 'utf8'))

      // 更新索引
      

      let path = path.join(basePath, `${id}.yaml`)
      let doc = yaml.safeLoad(fs.readFileSync(path, 'utf8'))

      doc.sign = 'geyu 2018-3-29 22:35:47'
      let userA = path.join(basePath, 'userA.yaml')
      fs.writeFileSync(userA, yaml.dump(doc), 'utf8')

      // 创建 api 文件

      fs.writeFileSync(file, yaml.dump(idx), 'utf8')
    }

    async getIdx() {

        let basePath = this.app.baseDir + '/app/public/api'
        let file = path.join(basePath, 'idx-api.yaml')
        let idx = yaml.safeLoad(fs.readFileSync(file, 'utf8'))
        this.ctx.body = idx
    }

    async getApiList() {

        let basePath = this.app.baseDir + '/app/public/api'
        let file = path.join(basePath, 'apiList.yaml')
        let apis = yaml.safeLoad(fs.readFileSync(file, 'utf8'))
        console.log(apis)

        this.ctx.body = apis
    }

    async findOne() {
      
      const { id } = this.ctx.query
      this.ctx.body = await this.loadById(id)
    }

    async findAll() {

    }
    

    /* yaml ************************************************************/

    async loadById(id) {
      let basePath = this.app.baseDir + '/app/public/api'
      let docPath = path.join(basePath, `${id}.yaml`)
      // let doc = yaml.safeLoad(fs.readFileSync(docPath, 'utf8'))
      // console.log(`${doc}`)
      // return doc
      return fs.readFileSync(docPath, 'utf8')
    }

}

module.exports = ApiController;