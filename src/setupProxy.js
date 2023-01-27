const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://pnic.up.railway.app",
      // target: 'https://westway-application.herokuapp.com',
      // target: "https://westway.world",
      changeOrigin: true,
    })
  );
};
