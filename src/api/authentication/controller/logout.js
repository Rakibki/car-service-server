const logout = (req, res) => {
  const user = req.body;
  res.clearCookie("token", { maxAge: 0 }).send("success");
};

module.exports = logout;
