const services = require("../../models/services");

const serviceDetais = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await services.findOne(query);
    res.send(result)
  }


  module.exports = serviceDetais