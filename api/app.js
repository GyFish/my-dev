// app.js

module.exports = app => {

  app.once('server', server => {

    console.log('>> server started!\n')
  });

  app.on('error', (err, ctx) => {

    console.log('>> server error!')
  });

  app.on('request', ctx => {

    let { url } = ctx
    
    if (url.startsWith('/api'))
      app.logger.info('\n>> url: ' + ctx.url)

    // 修改 gitbook 请求
    if(url.startsWith('/public/wiki'))
      if (url.endsWith('/'))
        ctx.url = url + 'index.html'

    
  });

  app.on('response', ctx => {

    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
    // app.logger.info('>> used: ' + used + 'ms\n')
  });

};