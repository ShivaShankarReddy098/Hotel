const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  checkIn: {
    type: String,
    required: [true, "checkIn required"],
  },
  checkOut: {
    type: String,
    required: [true, "checkOut required"],
  },
  email:{
    type:String,
    required:[true,'email is required']
  },
  rooms: {
    type: Number,
    required: [true, "rooms required"],
  },
  members: {
    type: Number,
    required: [true, "members required"],
  },
  type: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("booking", bookingSchema);
