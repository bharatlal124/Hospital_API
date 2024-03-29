//Add all required module here
const express = require("express");
const app = express();
const port = 8000;

const db = require("./config/mongoose");

const bodyParser = require("body-parser");

//we load the db location from the JSON files
const config = require("config");

//require passport and JWT Strategy for auth
const passport = require("passport");
//use of JWT token
const passportJWT = require("./config/passport-jwt-strategy");

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(passport.initialize());
//use express router
app.use("/", require("./routes/index"));

//server running on port 8000
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
