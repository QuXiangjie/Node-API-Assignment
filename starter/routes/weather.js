var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let weatherJson = {
    Temp: 90.5,
    Unit: 'fahrenheit',
    Cloudy: false,
    PrecipitationChance: 0,
  };
  res.json(weatherJson);
});

module.exports = router;
