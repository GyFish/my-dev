'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;

  router.get('/', controller.home.index);

  // idx
  router.get('/api/saveIdx', controller.api.saveIdx)
  router.get('/api/getIdx', controller.api.getIdx)
  router.get('/api/getIdxList', controller.api.getIdxList)
  router.get('/api/findOne', controller.api.findOne)
  router.get('/api/findAll', controller.api.findAll)
  
};
