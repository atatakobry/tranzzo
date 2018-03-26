var express = require('express');
var router = express.Router();

var store = {
  rawData: [],
  modifiedData: []
};

router.post('/data', function(req, res, next) {
  store = req.body;
  res.status(200).send();
});

router.get('/data', function(req, res, next) {
  res.json(store);
});

module.exports = router;
