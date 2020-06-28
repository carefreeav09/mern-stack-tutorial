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
        ref : "Users"
    },
    likes : {
        type: mongoose.Schema.ObjectId,
        ref: "Users"
    },
    date : {
        type: Date
    },
    postID : {
        type:mongoose.Schema.ObjectId,
        ref: "Posts"
    },
});

const Comments = mongoose.model("Comments", commentsSchema);
module.exports = Comments;