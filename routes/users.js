const express = require("express");
const router = express.Router();
const { CREATEUSER } = require("../controller/UsersController");

router.post("/", async (req, res) => {
  const user = await CREATEUSER(req.body);
  return res.send(user);
});

module.exports = router;
