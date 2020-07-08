const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentsSchema = new Schema({
    commentsID: { type: Number},
    replies: [{
        type: String,
        default : undefined
    }],
    comment : {
        type: String
    },
    username: { type: String },
    userID : {
        type: mongoose.Schema.ObjectId,
        ref : "User"
    },
    likes : {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    date : {
        type: Date
    },
    postID : {
        type:mongoose.Schema.ObjectId,
        ref: "Post"
    },
});

const Comments = mongoose.model("Comment", commentsSchema);
module.exports = Comments;