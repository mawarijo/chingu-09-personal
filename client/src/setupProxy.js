const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/landings", { target: "http://localhost:4000/" }));
};
