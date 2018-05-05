const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    this.ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
