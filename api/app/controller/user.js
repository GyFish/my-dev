const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    this.ctx.body = { "code": 20000, "data": { "token": "admin" } }
  }
}

module.exports = HomeController
