'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.post('/user/login', controller.user.login)

  // api
  router.post('/api/addApi', controller.api.addApi)
  router.get('/api/getIdx', controller.api.getIdx)
  router.get('/api/getApiList', controller.api.getApiList)
  router.get('/api/findOne', controller.api.findOne)
  router.get('/api/findAll', controller.api.findAll)
  
  // wiki
  router.get('/wiki/getBookList', controller.wiki.getBookList)
  router.post('/wiki/addBook', controller.wiki.addBook)
  
};
