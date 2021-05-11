const express = require('express');
const router = express.Router();
const buildsCtrl = require('../../controllers/api/builds');

router.post('/build/items/:id', buildsCtrl.addToBuild);

module.exports = router;