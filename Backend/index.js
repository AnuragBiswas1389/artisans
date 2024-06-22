const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoute = require("./routes/product.route.js");
const categoryRoute = require("./routes/category.route.js");
const userRoute = require("./routes/user.route.js");
const carouselRoute = require("./routes/carousel.route.js");

const app = express();

var mongodb = "mongodb://localhost/mydatabase";

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/users", userRoute);
app.use("/api/carousels", carouselRoute),
  app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

mongoose
  .connect(mongodb)
  .then(() => {
    console.log("Connected to database!");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
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
