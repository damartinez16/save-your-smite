const Build = require('../../models/build');


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
  
    const build = await Build.getBuild(req.user._id);
    res.json(build);
  }


async function addToBuild(req, res) {
    console.log('sad')
    const build = await Build.getBuild(req.user._id);
    await build.addItemToBuild(req.params.id); 
    res.json(build);
  }