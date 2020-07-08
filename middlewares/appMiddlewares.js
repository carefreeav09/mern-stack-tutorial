const cors = require("cors");
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const {buildSchema} = require('graphql');
const User = require('../model/UsersModel')
const Post = require('../model/PostsModel')
const bcrypt = require("bcryptjs");

const combineMiddlewares = (express, app) => {
    require("dotenv").config();
    app.use(express.static("../../public/uploads"));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.use(cors());
    app.use('/graphql', graphqlHTTP({
        schema: buildSchema(`
    
      type User {
        _id : ID!
        name : String!
        username : String!
        bio: String
        email : String
        phoneNumber: String
        gender: String
        website: String
        password: String
        profile_picture_url : String
      }
      
      type Post {
        photo_url : String!,
        caption : String,
        date: String,
      }
      
      input PostInput {
        photo_url : String!
        caption : String,
      }
      
      input UserInput {
        name : String!
        username : String!
        bio: String
        email : String
        phoneNumber: String
        gender: String
        website: String
        password: String!
        profile_picture_url : String
      }
      
      type RootQuery {
        users : [User!]!
      }
      
      type RootMutation {
        addUser(userInput : UserInput) :User
        addPost(postInput : PostInput ) : Post
      }
     
      schema {
        query: RootQuery,
        mutation: RootMutation,
      }
    `),
        rootValue: {
            users: () => {
                return User.find()
                    .then(users => {
                        return users.map(item => {
                            return {...item._doc, _id: item.id}
                        })
                    })
                    .catch(err => {
                        throw err;
                    })
            },
            addUser: (args) => {

                return User.findOne({
                    username : args.userInput.username
                })
                    .then(user => {
                        if (user){
                            throw new Error('User already Exists')
                        }
                        return bcrypt.hash(args.userInput.password, 12)

                    })
                    .then(
                        hashedPassword => {
                            const user = new User({
                                name: args.userInput.name,
                                username: args.userInput.username,
                                password: hashedPassword,
                                bio: args.userInput.bio,
                                email: args.userInput.email,
                                website: args.userInput.website,
                                gender: args.userInput.gender,
                                profile_picture_url: args.userInput.profile_picture_url,
                                phoneNumber: args.userInput.phoneNumber
                            });

                            return user.save();
                        }
                    )
                    .then(result => {
                        return {...result._doc, _id: result.id}
                    })
                    .catch(err => {
                        throw err
                    })
            },

            addPost: (args) => {
                const post = new Post({
                    photo_url: args.postInput.photo_url,
                    caption: args.postInput.caption,
                });

                return post.save().then(result => {
                    return {...result._doc};
                }).catch(err => {
                    throw err;
                });

            }
        },
        graphiql: true
    }))
};

module.exports = combineMiddlewares;
