const God = require('../../models/god');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const gods = await God.find({}).sort('name')
  res.json(gods);
}

async function show(req, res) {
  const god = await God.findById(req.params.id);
  res.json(god);
}
