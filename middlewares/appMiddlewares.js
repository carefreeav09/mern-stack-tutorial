const cors = require("cors");
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema')

const combineMiddlewares = (express, app) => {
  require("dotenv").config();
  app.use(express.static("../../public/uploads"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(cors());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))
};

module.exports = combineMiddlewares;
