const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB');
const PORT = process.env.PORT || 4000;
require('dotenv').config()
const authenticationRoute = require('./routes/authentication/index.js')
const serviceRoute = require('./routes/services/index.js')
const bookigRoute = require('./routes/bookings/index.js')

const app = express()

applyMiddleware(app)
app.use(authenticationRoute)
app.use(serviceRoute)
app.use(bookigRoute)

app.get("/health", (req, res) => {
    res.send("Doctor Is running")
})

app.all("*", (req, res, next) => {
    const error = new Error(`The requsted url invalid ${req.url}`)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err?.message
    })
})

const main = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log("server is running");
    })
}
 
main()