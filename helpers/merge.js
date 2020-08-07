const User = require('../model/UsersModel');

const user = async userId => {
    try {
        const user = await User.findById(userId);
        console.log(user, 'working');
        return {
            ...user._doc,
            _id: user.id,
            posts: posts.bind(this, user._doc.posts)
        }
    } catch (err) {
        throw err;
    }
}

const singlePost = async postID => {
    try {
        const post = Post.findById(postID);

        return {
            ...post._doc,
            _id: post.id,
            userID: user.bind(this, post.userID),
            comments: posts.bind(this, post._doc.posts)
        }
    } catch (err) {
        throw err;
    }
}

const posts = async postIds => {
    try {
        const posts = await Post.find({
            _id: {$in: postIds}
        });
        return posts.map(post => {
            return {
                ...post._doc
                , _id: post.id,
                userID: user.bind(this, post.userID),
                comments : comments(this, post.comments)
            }
        });
    } catch (err) {
        throw err;
    }
}

const comments = async commentIds => {
    console.log(commentIds, 'this should be an array');
    try {
        const comments = await Comment.find({
            _id: {$in: commentIds}
        });

        console.log(comments, 'comments')
        return comments.map(comment => {
            return {
                ...comment._doc
                , _id: comment.id,
                postID: singlePost.bind(this, comment.postID),
                userID: user.bind(this, comment.userID)
            }
        });
    } catch (err) {
        console.log('i am here inside comments err section')
        throw err;
    }
}

exports.user = user;
exports.posts = posts;
exports.singlePost = singlePost;
exports.comments = comments;