var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a test resource' + JSON.stringify(req.data));

});

module.exports = router;
