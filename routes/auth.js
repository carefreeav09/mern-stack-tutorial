const express = require("express");
const router = express.Router();

const { LOGIN } = require("../controller/AuthController");

router.post("/", async (req, res) => {
  const userLogin = await LOGIN(req.body);
  return res.status(userLogin.status).send(userLogin);
});

module.exports = router;
