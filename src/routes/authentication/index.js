const express = require('express')
const createToken = require('../../api/authentication/controller/createToken')
const logout = require('../../api/authentication/controller/logout')
const router = express.Router()


router.post('/jwt', createToken)

router.delete('/logout', logout)

module.exports = router
