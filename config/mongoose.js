//add mongoose to connect database
const mongoose = require("mongoose");

//Connect to  the Database
mongoose.connect(
  /*"mongodb://localhost/HospitalAPI"*/ "mongodb+srv://bharatlalsohna:NnteCo5KnzUpjdIl@hospitalapi.ka9jqyi.mongodb.net/?retryWrites=true&w=majority&appName=HospitalAPI",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

// Listen for the 'error' event and log any errors
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// Listen for the 'open' event to know when the connection is established
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

// Export the mongoose connection
module.exports = db;
