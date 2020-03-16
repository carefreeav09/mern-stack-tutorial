const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      keepAlive: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch(err => {
      console.log(`Database connection failed with ${err}`);
    });
};

module.exports = connection;
