var config = require('./config');
var gb = require('geckoboard')(process.env.GECKO_APIKEY);

gb.datasets.delete(config.geckoboard.dataset,
  function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Dataset deleted');
  })
