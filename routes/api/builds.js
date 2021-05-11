const express = require('express');
const router = express.Router();
const buildsCtrl = require('../../controllers/api/builds');

router.get('/', buildsCtrl.index);
router.get('/build', buildsCtrl.build);
router.post('/build/items/:id', buildsCtrl.addToBuild);
router.post('/build/savebuild', buildsCtrl.saveBuild);

module.exports = router;