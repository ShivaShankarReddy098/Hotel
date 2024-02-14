const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  checkIn: {
    type: Date,
    required: [true, "checkIn required"],
  },
  checkOut: {
    type: Date,
    required: [true, "checkOut required"],
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
