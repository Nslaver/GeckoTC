var app = require('./app');
var config = require('./config');

var everyFifteenMinutes = function() {
  app.getRow(config.flightstats.airPorts, function(airportRows) {
    console.log(airportRows);
    app.insertData(airportRows);
  });
  console.log("Running every 15 seconds");
}

var CronJob = require('cron').CronJob;
new CronJob({
  cronTime: config.cron.time, //run every 15 minutes
  onTick: everyFifteenMinutes,
  start: true,
  timeZone: "America/Los_Angeles"
});
