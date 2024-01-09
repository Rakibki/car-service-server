const express = require('express')
const getServices = require('../../api/services/services')
const serviceDetais = require('../../api/services/serviceDetils')
const router = express.Router()

router.get("/services", getServices)
router.get("/serviceDetais/:id", serviceDetais)

module.exports = router