require('dotenv').config()
const jwt = require('jsonwebtoken')

const createToken = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_SCECAT, { expiresIn: "1h" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.send({ success: true });
};

module.exports = createToken;
