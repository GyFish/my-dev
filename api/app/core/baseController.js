const { Controller } = require('egg');

class BaseController extends Controller {

  get user() {
    return this.ctx.session.user;
  }

  info(log) {
    this.ctx.app.logger.info('>>', log)
  }

  getFilter() {

    let { filter } = this.ctx.query


    return filter
  }

  getPage() {

    let { page } = this.ctx.query 


    return page
  }

  success(data) {
    this.ctx.body = {
      code: 2000,
      success: true,
      data
    }
  }

  successWithCode(code, data) {
    this.ctx.body = {
      code: code,
      success: true,
      data
    }
  }

  successWithPage(list, count) {
    this.ctx.body = {
      code: 2000,
      success: true,
      data: {
          list,
          total: count
      }
    }
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }

}

module.exports = BaseController;