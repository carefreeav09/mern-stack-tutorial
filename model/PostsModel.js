const mongoose = require("mongoose");
const { Schema } = mongoose;

const postsSchema = new Schema({
    photo_url: { type: String},
    caption : {type: String},
    userID : {
        type: mongoose.Schema.ObjectId,
        ref : "User"
    },
    date : {
        type: Date
    },
    likes : [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    comments : [{
        type: mongoose.Schema.ObjectId,
        ref: "Comment"
    }]
});

const Posts = mongoose.model("Posts", postsSchema);
module.exports = Posts;
