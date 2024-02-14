const express = require("express");
const getBookingDetails = require("../controllers/booking-controller");
const createBooking = require("../controllers/booking-controller");
const updateBooking = require("../controllers/booking-controller");
const deleteBooking = require("../controllers/booking-controller");
const app = express();
const router = express.Router();

router.get("/user/:userId/bookingDetails", getBookingDetails);
router.post("/user/:userId/createBooking", createBooking);
router.patch("/user/:userId/updateBooking", updateBooking);
router.delete("/user/:userId/bookingDelete", deleteBooking);
module.exports = router;
