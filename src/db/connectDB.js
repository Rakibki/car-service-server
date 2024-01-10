const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () => {
    console.log("connecting database....");
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {DbName:"car-doctor"})
    console.log("connected database");
}

module.exports = connectDB;