const express = require("express");
const startup = require("./middlewares");

const app = express();

startup(express, app);

app.get("/", async (req, res) => {
  res.send("I am at Index");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening at ${port}`));
