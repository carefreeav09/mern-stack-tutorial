const User = require('../../model/UsersModel')
const { posts } = require('../../helpers/merge')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

module.exports = {

    login :async ({username, password}) => {
        const user = await  User.findOne({
            username : username
        });

        if(!user) {
            throw new Error("User does not exist");
        }

        const isPasswordSame = await bcrypt.compare(password , user.password);

        if(!isPasswordSame)
        {
            throw new Error ("Invalid password")
        }

        const token = await jwt.sign({userID : user.id, username : user.username}, "reactxagramSecretKey", {
            expiresIn : '1h'
        });

        return {
            userID : user.id,
            token : token,
            tokenExpiration : 1
        }


    },

    users: (req) => {
        if(!req.isAuth)
        {
            throw new Error('UnAuthorized')
        }
        return User.find()
            .then(users => {
                return users.map(item => {
                    return {...item._doc, _id: item.id, posts: posts.bind(this, item._doc.posts)}
                })
            })
            .catch(err => {
                console.log(err, 'im here inside fetch users catch block')

                throw err;
            })
    },

    addUser: (args) => {

        return User.findOne({
            username: args.userInput.username
        })
            .then(user => {
                if (user) {
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
                console.log(err, 'im here inside add users catch block')

                throw err
            })
    },
}