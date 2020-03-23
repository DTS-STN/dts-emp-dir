const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${process.env.API_SERVER_URL}`,
      changeOrigin: true,
    })
  );
};