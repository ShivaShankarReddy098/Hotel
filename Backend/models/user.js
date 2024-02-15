const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    // default: "shiva",
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6,
  },
  phone: {
    type: Number,
    required: [true, "number is required"],
    minlength: 10,
  },
  city: {
    type: String,
    required: [true, "city is required"],
  },
  state: {
    type: String,
    required: [true, "state is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
});
module.exports = mongoose.model("user", userSchema);
