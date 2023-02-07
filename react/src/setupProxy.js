const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/backend', {
      target: 'http://172.20.0.1:5000',
      pathRewrite: {
        '^/backend':''
      },
      changeOrigin: true
    })
  )
  
//   app.use(
//     createProxyMiddleware('/다른context', {
//       target: 'https://다른호스트',
//       pathRewrite: {
//         '^/지우려는패스':''
//       },
//       changeOrigin: true
//     })
//   )
  
  
};