'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yard/index', { title: 'Main page' });
});

router.get('/docs', function(req, res, next) {
  res.render('yard/docs/index', { title: 'Main page' });
});

module.exports = router;