var express = require('express');
var router = express.Router();
var newsController = require('../app/controllers/newController')


router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;