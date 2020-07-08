const mongoose = require("mongoose");
const { Schema } = mongoose;

const postsSchema = new Schema({
    id: { type: Number},
    photo_url: { type: String},
    caption : {type: String},
    userID : {
        type: mongoose.Schema.ObjectId,
        ref : "Users"
    },
    date : {
        type: Date
    },
});

const Posts = mongoose.model("Posts", postsSchema);
module.exports = Posts;
