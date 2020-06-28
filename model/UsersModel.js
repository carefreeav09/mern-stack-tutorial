const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: { type: Number},
  name: { type: String },
  username: { type: String },
  bio : {type: String},
  password: { type: String },
  email: { type: String },
  gender: { type: String, enum: ['MALE', 'FEMALE', 'UNSPECIFIED']},
  website: { type: String},
  posts : [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Posts"
    }
  ],
  profile_picture_url: { type: String }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
