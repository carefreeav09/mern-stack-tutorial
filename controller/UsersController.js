const User = require("../model/UsersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { success } = require("../constants/responses");

const CREATE_USER = async body => {
  let payload = {
    password: body.password,
    phoneNumber : body.phoneNumber,
    email : body.email,
    name: body.name
  };

  user = new User(payload);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  delete user.password;
  delete payload.password;

  payload.token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);

  return success(200, payload);
};

module.exports = {
  CREATE_USER: CREATE_USER
};
