const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
const router = require("./routes/user-router");
app.use(router);

async function db() {
  try {
    await mongoose.connect(
      "mongodb+srv://shiva:2h7l5cUdXrqOvctJ@cluster0.tqlciti.mongodb.net/"
    );
    console.log("Database is connected!!");
    app.listen(7000, () => {
      console.log("Server is running at port 7000");
    });
  } catch (err) {
    console.log(err);
  }
}
db();
