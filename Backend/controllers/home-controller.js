const express = require("express");
// const a = require("../../Frontend/public/home.html")
// const app = express();
// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));
const getHome = async (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  // res.send("Hello World");
  return res.redirect("./public/home.html"); 
};
module.exports = getHome;
