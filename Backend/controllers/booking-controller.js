const express = require("express");
const booking = require("../models/booking");
const getBookingDetails = async (req, res, next) => {
  try {
    const bookigDetails = await booking.find();
    return res.status(200).json({
      bookigDetails,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = getBookingDetails;
const createBooking = async (req, res) => {
  try {
    let newBooking = await booking.insertOne({
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      rooms: req.body.rooms,
      members: req.body.members,
      type: req.bbody.type,
    });
    return res.status(200).json({
      newBooking,
    });
    console.log("user created");
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = createBooking;
const updateBooking = async (req, res) => {
  try {
    const userId = req.params.id;
    const addBooking = await user.findByIdAndUpdate(userId, {
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      rooms: req.body.rooms,
      members: req.body.members,
      type: req.bbody.type,
    });
    return res.status(200).json({
      addBooking,
    });
    console.log("user updated");
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = updateBooking;
const deleteBooking = async (req, res) => {
  try {
    const deleteId = req.params.deleteId;
    await booking.findByIdAndDelete(deleteId, {});
    return res.status(200).json({
      message: "User data removed ",
    });
    console.log("user deleted");
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = deleteBooking;
