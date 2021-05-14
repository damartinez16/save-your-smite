const Build = require('../../models/build');
const Item = require('../../models/item');

module.exports = {
  index,
  build,
  addToBuild,
  addGod,
  saveBuild,
  delete: deleteBuild
};


async function index(req, res) {
  const builds = await Build.find({}).populate(['items', 'god']).exec();
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

async function saveBuild(req, res) {
  const build = await Build.getBuild(req.user._id);
  build.isSubmitted = true;
  await build.save();
  res.json(build);
}

async function deleteBuild(req, res) {
  const build = await Build.findByIdAndDelete(req.params.id);
  res.json(build);
}