const express = require('express');
const router = express.Router();
const godsCtrl = require('../../controllers/api/gods');


router.get('/', godsCtrl.index);

router.get('/:id', godsCtrl.show);

module.exports = router;
