const {buildSchema} = require('graphql');

module.exports = buildSchema(`

      type AuthData {
        userID : ID!
        token : String!
        tokenExpiration : Int!
      }
   
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
        posts : [Post!]
        createdAt : String!
        updatedAt : String!
      }
      
      type Post {
        _id : ID!
        photo_url : String!,
        caption : String,
        date: String,
        userID : User!
        createdAt : String!
        updatedAt : String!
        comments : [Comment]
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
      
      type Comment {
        _id : ID!
        comment : String!
        userID : User!
        postID : Post!
      }
      
      input CommentInput {
        comment : String!
        postID : String!
      }
      
      
      type RootQuery {
        users : [User!]!
        posts : [Post!]!
        login(username: String!, password : String!) : AuthData!
      }
      
      type RootMutation {
        addUser(userInput : UserInput) :User
        addPost(postInput : PostInput ) : Post
        addComment(commentInput : CommentInput) : Comment
        deleteComment(commentId : ID!, postId : ID!) : Post!
      }
     
      schema {
        query: RootQuery,
        mutation: RootMutation,
      }
    `);