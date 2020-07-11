const Post = require('../../model/PostsModel')
const Comment = require('../../model/CommentsModel')
const { user, posts, singlePost } = require('../../helpers/merge')

module.exports = {
    addComment: async (args, req) => {
        if(!req.isAuth)
        {
            throw new Error('UnAuthorized')
        }
        const comment = new Comment({
            comment: args.commentInput.comment,
            userID: req.userId,
            postID: args.commentInput.postID,
        });
        let createdComment;

        try {
            const result = await comment.save();

            createdComment = {
                ...result.doc,
                comment : result._doc.comment,
                _id: result._doc._id.toString(),
                userID: user.bind(this, result._doc.userID),
                postID : singlePost.bind(this, result._doc.postID)
            }

            const postID = await Post.findById(args.commentInput.postID);
            if (!postID) {
                throw new Error('Post not found');
            }

            postID.comments.push(comment);

            await postID.save();
            return createdComment;
        } catch (err) {
            console.log(`err inside add comment block with ${err}`)
            throw err;
        }
    },

    deleteComment :async (args, req) => {
        if(!req.isAuth)
        {
            throw new Error('UnAuthorized')
        }
        try {
            const post = await Post.findById(args.postId);

            if(!post){
                throw new Error('Post does not exist')
            }

            post.comments.pull(args.commentId);
            const updatedPost = {
                ...post._doc,
                _id: post.id,
                userID: user.bind(this, post._doc.userID),
                comments: posts.bind(this, post._doc.comments)
            }

            await Comment.deleteOne({
                _id : args.commentId
            });

            await post.save();

            return updatedPost
        }

        catch (err) {
            console.log('im inside delete comment err');
            throw err;
        }
    }
}