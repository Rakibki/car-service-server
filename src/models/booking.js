const {model, Schema} = require("mongoose")

const bookingsSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
  
})

const bookings = model('bookings', bookingsSchema)

module.exports = bookings