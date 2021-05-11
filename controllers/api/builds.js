const Build = require('../../models/order');


module.exports = {
    index,
    build,
  addToBuild,
};


async function index(req, res) {
    const builds = await Build.find({});
    res.json(builds);
  }

async function build(req, res) {
    // A cart is the unpaid order for a user
    const build = await Build.getBuild(req.user._id);
    res.json(build);
  }


async function addToBuild(req, res) {
    const build = await Build.getBuild(req.user._id);
    await build.addItemToBuild(req.params.id); 
    res.json(build);
  }