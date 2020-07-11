const cors = require("cors");
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const graphQLSchema = require('../graphql/schema');
const graphQLResolvers = require(`../graphql/resolvers`)
const isAuth = require('./authMiddleware');

const combineMiddlewares = (express, app) => {
    require("dotenv").config();
    app.use(isAuth);
    app.use(express.static("../../public/uploads"));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.use(cors());
    app.use('/graphql', graphqlHTTP({
        schema: graphQLSchema,
        rootValue: graphQLResolvers,
        graphiql: true
    }))
};

module.exports = combineMiddlewares;
