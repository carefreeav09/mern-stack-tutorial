const User = require("../model/UsersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { success } = require("../constants/responses");
const LOGIN = async body => {
  let user = await User.findOne({ username: body.username });
  if (!user) return failed(400, "User Name does not exist");
  const validPassword = await bcrypt.compare(body.password, user.password);
  if (!validPassword) return failed(400, "Invalid Username or Password");

  const payload = {
    id: user.id,
    username: user.username,
    name: user.name
  };

  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  payload.token = token;
  return success(200, payload);
};

module.exports = {
  LOGIN
};
