const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {type: String, required: true},
    bio: {type: String},
    password: {type: String, required: true},
    email: {type: String},
    gender: {type: String, enum: ['MALE', 'FEMALE', 'UNSPECIFIED']},
    website: {type: String},
    profile_picture_url: {type: String},
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    followers : [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
