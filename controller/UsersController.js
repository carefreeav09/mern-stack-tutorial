const User = require("../model/UsersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { success } = require("../constants/responses");

const CREATEUSER = async body => {
  let payload = {
    username: body.username,
    password: body.password,
    name: body.name
  };

  user = new User(payload);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  console.log("new User added, check database");

  delete user.password;
  delete payload.password;

  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  payload.token = token;

  return success(200, payload);
};

module.exports = {
  CREATEUSER
};
