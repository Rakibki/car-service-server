const {Schema, model} = require("mongoose")

const ServicerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    service_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    facility: {
        type: Array,
        required: true
    },
})

const services = model('services', ServicerSchema)

module.exports = services