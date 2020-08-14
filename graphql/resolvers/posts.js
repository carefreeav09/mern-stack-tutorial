const Post = require('../../model/PostsModel')
const User = require('../../model/UsersModel')
const {user} = require('../../helpers/merge');
const {comments} = require('../../helpers/merge');

module.exports = {
    posts: async (args, req) => {
        // if (!req.isAuth) {
        //     throw new Error('UnAuthorized')
        // }
        try {
            const postLists = await Post.find();
            return postLists.map(post => {
                return {
                    ...post._doc,
                    _id: post.id,
                    userID: user.bind(this, post._doc.userID),
                    comments : comments.bind(this, post._doc.comments)
                }
            })
        } catch (err) {
            throw err;
        }
    },

    addPost: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('UnAuthorized')
        }
        const post = new Post({
            photo_url: args.postInput.photo_url,
            caption: args.postInput.caption,
            userID: req.userId
        });
        let createdPost;

        try {
            const result = await post.save();
            createdPost = {
                ...result._doc,
                _id: result._doc._id.toString(),
                userID: user.bind(this, result._doc.userID),
            };

            const userID = await User.findById(req.userId)
            if (!user) {
                throw new Error('User not found');
            }
            userID.posts.push(post);

            await userID.save();

            return createdPost;
        } catch (err) {
            console.log(err, 'im here inside add posts catch block')
            throw err;
        }
    },
}