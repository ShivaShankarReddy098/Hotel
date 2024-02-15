const express = require("express");
const router = express.Router();
const {
  getBookingDetails,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking-controller");
// const createBooking = require("../controllers/booking-controller");
// const updateBooking = require("../controllers/booking-controller");
// const deleteBooking = require("../controllers/booking-controller");

router.get("/bookingDetails", getBookingDetails);
router.post("/createBooking", createBooking);
router.patch("/bookingDetails/:bookingId", updateBooking);
router.delete("/bookingdetails/:bookingId", deleteBooking);
module.exports = router;
