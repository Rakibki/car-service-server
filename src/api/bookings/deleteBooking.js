const bookings = require("../../models/booking");

const deleteBooking = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await bookings.deleteOne(query);
    res.send(result)
  }


  module.exports = deleteBooking