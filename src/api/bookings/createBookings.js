const bookings = require("../../models/booking");

const createBooking = async (req, res) => {
  const booking = req.body;
  const result = await bookings.insertOne(booking);
  res.send(result);
};

module.exports = createBooking