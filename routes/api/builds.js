const express = require('express');
const router = express.Router();
const buildsCtrl = require('../../controllers/api/builds');

router.get('/', buildsCtrl.index);
router.get('/build', buildsCtrl.build);
router.get('/build/items/:id', buildsCtrl.addToBuild);
router.get('/build/savebuild', buildsCtrl.saveBuild);

module.exports = router;