const express = require('express');
const createBooking = require('../../api/bookings/createBookings');
const getBooking = require('../../api/bookings/getBooking');
const deleteBooking = require('../../api/bookings/deleteBooking');
const router = express.Router()

router.post("/booking", createBooking);
router.get("/bookings", getBooking);
router.delete("/bookings/:id", deleteBooking);


module.exports = router