var app = require('./app');
var config = require('./config');

app.getRow(config.flightstats.airPorts, function(airportRows) {
  console.log(airportRows);
  app.insertData(airportRows);
});
console.log("Running every hour at minute 15");
