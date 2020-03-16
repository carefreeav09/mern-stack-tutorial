const appMiddlewares = require("./appMiddlewares");
const connection = require("./connection");
const routers = require("./routes");

const startup = (express, app) => {
  appMiddlewares(express, app);
  connection();
  routers(app);
};

module.exports = startup;
