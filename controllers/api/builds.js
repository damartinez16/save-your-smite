const Build = require('../../models/build');
const Item = require('../../models/item');

module.exports = {
    index,
    build,
  addToBuild,
  addGod,
  saveBuild
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
    console.log(build);
  }


async function addGod(req, res) {
  const build = await Build.getBuild(req.user._id);
  await build.addGodToBuild(req.params.id);
  res.json(build);
}

  function saveBuild() {

  }