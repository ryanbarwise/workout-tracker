const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds033125.mlab.com:33125/heroku_m7dlv3jc", { useNewUrlParser: true,
useFindAndModify: false
});

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);






app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });