const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); ///imp
const router = require("./routes/user-router");
const Router = require("./routes/booking-router");
app.use(router);
app.use(Router);
// git pull origin main
//mongodb://localhost:27017/
//mongodb+srv://shiva:2h7l5cUdXrqOvctJ@cluster0.tqlciti.mongodb.net/
async function db() {
  try {
    await mongoose.connect("mongodb://localhost:27017/allUserData");
    console.log("Database is connected!!");
    app.listen(7000, () => {
      console.log("Server is running at port 7000");
    });
  } catch (err) {
    console.log(err);
  }
}
db();
