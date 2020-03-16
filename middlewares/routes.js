const users = require("../routes/users");
const auth = require("../routes/auth");

const routers = app => {
  app.use("/api/users", users);
  app.use("/api/login", auth);
};

module.exports = routers;
