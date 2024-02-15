const express = require("express");
const booking = require("../models/booking");
const bookingCltr = {};
bookingCltr.getBookingDetails = async (req, res, next) => {
  try {
    const bookigDetails = await booking.find();
    console.log(bookigDetails);
    return res.status(200).json({
      bookigDetails,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

bookingCltr.createBooking = async (req, res) => {
  try {
    let newBooking = await booking.create(
      req.body
      // checkIn: req.body.checkIn,
      // checkOut: req.body.checkOut,
      // rooms: req.body.rooms,
      // members: req.body.members,
      // type: req.bbody.type,
    );
    console.log("user created");
    await newBooking.save();
    return res.status(200).json({
      newBooking,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

bookingCltr.updateBooking = async (req, res) => {
  try {
    const userId = req.params.id;
    const addBooking = await booking.findByIdAndUpdate(
      userId,
      req.body
      // checkIn: req.body.checkIn,
      // checkOut: req.body.checkOut,
      // rooms: req.body.rooms,
      // members: req.body.members,
      // type: req.bbody.type,
    );
    // await addBooking.save();
    console.log("user updated");
    return res.status(201).json({
      addBooking,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

bookingCltr.deleteBooking = async (req, res) => {
  try {
    const deleteId = req.params.id;
    await booking.findByIdAndDelete(deleteId, {});
    console.log("user deleted");
    return res.status(200).json({
      message: "User data removed ",
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = bookingCltr;
