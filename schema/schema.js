const graphql = require('graphql');
const User = require('../model/UsersModel');
const Post = require('../model/PostsModel');
const Comment = require('../model/CommentsModel');

const {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt, GraphQLSchema, GraphQLEnumType, GraphQLList, GraphQLNonNull
} = graphql;

//Schema defines data on the Graph like object types(book type), relation between
//these object types and descibes how it can reach into the graph to interact with
//the data to retrieve or mutate the data

const GenderEnumType = new GraphQLEnumType({
    name: 'GenderEnum',
    values: {
        "MALE": {
            value: 'M',
        },
        "FEMALE": {
            value: 'F',
        },
        "UNSPECIFIED": {
            value: 'U',
        }
    },
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        pages: {type: GraphQLInt}
    })
});


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLNonNull(GraphQLString)},
        username: {type: GraphQLString},
        bio: {type: GraphQLString},
        email: {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
        gender: {type: GenderEnumType},
        website: {type: GraphQLString},
        password: {type: GraphQLNonNull(GraphQLString)},
        posts: {
            type: PostType,
            resolve(parent, args) {
                return Post.find({id: parent.id});
            }
        }
    })
})


//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular book
//or get a particular author.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        post: {
            type: PostType,
            //argument passed by the user while making the query
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                //Here we define how to get data from database source

                //this will return the book with id passed in argument by the user
                return Post.findById(args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({});
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        authors: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {
                    type: GraphQLString,
                },
                username: {
                    type: GraphQLString,
                },
                password: {
                    type: GraphQLString,
                },
                bio: {
                    type: GraphQLString,
                },
                email: {
                    type: GraphQLString,
                },
                profile_picture_url: {
                    type: GraphQLString,
                },
                website: {
                    type: GraphQLString,
                },
                gender: {
                    type: GraphQLString
                },
                phoneNumber: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name,
                    username: args.username,
                    password: args.password,
                    bio: args.bio,
                    email: args.email,
                    gender: args.gender,
                    website: args.website,
                    profile_picture_url: args.profile_picture_url
                });
                return user.save();
            }
        }
    }
})

//Creating a new GraphQL Schema, with options query which defines query
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});