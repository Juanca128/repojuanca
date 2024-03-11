var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Mensaje enviado a la base!');
});

module.exports = router;


