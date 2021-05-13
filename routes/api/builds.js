const express = require('express');
const router = express.Router();
const buildsCtrl = require('../../controllers/api/builds');

router.delete('/:id', buildsCtrl.delete);
router.get('/', buildsCtrl.index);
router.get('/build', buildsCtrl.build);
router.get('/build/items/:id', buildsCtrl.addToBuild);
router.get('/build/god/:id', buildsCtrl.addGod);
router.get('/build/savebuild', buildsCtrl.saveBuild);

module.exports = router;