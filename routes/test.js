var express = require('express');
var router = express.Router();
const names = ['Noah', 'Aymen', 'Said', 'Mohammed', 'Anouar'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ name: names[Math.floor(Math.random() * 10 % 5)] });
});

module.exports = router;
