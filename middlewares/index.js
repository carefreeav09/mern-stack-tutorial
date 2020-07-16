const appMiddlewares = require("./appMiddlewares");
const connection = require("./connection");

const startup = (express, app) => {
  appMiddlewares(express, app);
  connection();
};

module.exports = startup;
