const cors = require("cors");

const combineMiddlewares = (express, app) => {
  require("dotenv").config();
  app.use(express.static("../../public/uploads"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(cors());
};

module.exports = combineMiddlewares;
