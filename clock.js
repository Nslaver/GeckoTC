var app = require('./app');
var config = require('./config');

var minuteFifteenth = function() {
  app.getRow(config.flightstats.airPorts, function(airportRows) {
    console.log(airportRows);
    app.insertData(airportRows);
  });
  console.log("Running every hour at minute 15");
}

var CronJob = require('cron').CronJob;
new CronJob({
  cronTime: "15 * * * *", //15 minutes after every hour
  onTick: minuteFifteenth,
  start: true,
  timeZone: "America/Los_Angeles"
});
