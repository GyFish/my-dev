const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const Controller = require('egg').Controller

class ApiController extends Controller {

    async addApi() {

        let file = path.join(basePath, 'idx-api.yaml')
        let idx = yaml.safeLoad(fs.readFileSync(file, 'utf8'))

        // 更新索引
        

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
        
        let user = path.join(basePath, 'user.yaml')
        let doc = yaml.safeLoad(fs.readFileSync(user, 'utf8'))
        console.log(doc);

        doc.sign = 'geyu 2018-3-29 22:35:47'
        let userA = path.join(basePath, 'userA.yaml')
        fs.writeFileSync(userA, yaml.dump(doc), 'utf8')
    }

    async findAll() {

        
        
    }

}

module.exports = ApiController;