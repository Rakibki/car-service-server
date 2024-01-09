require('dotenv').config()
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if(!token) {
      return res.status(401).send("unauthorized")
    }
    jwt.verify(token, process.env.JWT_SCECAT, (err, decoded) => {
      if(err) {
        return res.status(403).send("unauthorized")
      }else {
        req.user = decoded
        next()
      }
    })
  }


  module.exports = verifyToken