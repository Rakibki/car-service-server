const bookings = require("../../models/booking");

const getBooking = async (req, res) => {
  console.log(req.user);
  const email = req.query.email;
  if (req.user.email !== email) {
    return res.send("unauthorized");
  }
  const query = { email: email };
  const result = await bookings.find(query).toArray();
  res.send(result);
};


module.exports = getBooking