const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

var mongodb = "mongodb://localhost/mydatabase";

mongoose.Promise = global.Promise;
mongoose.connect(mongodb);

const db = mongoose.connection;

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});




db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.on("open", () => {
  console.log("Connected to MongoDB");
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

//closes the connection on exit
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose connection is disconnected due to application termination"
    );
    process.exit(0);
  });
});
