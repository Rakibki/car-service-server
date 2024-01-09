
const services = require('../../models/services')

const getServices = async (req, res) => {
  const result = await services.find();
  res.send(result);
};

module.exports = getServices
