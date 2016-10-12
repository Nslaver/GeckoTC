var app = require('./app');
var config = require('./config');

var minutefifteenth = function() {
  app.getRow(config.flightstats.airPorts, function(airportRows) {
    console.log(airportRows);
    app.insertData(airportRows);
  });
  console.log("Running every hour at minute 15");
}

var CronJob = require('cron').CronJob;
new CronJob({
  cronTime: "15 * * * *", //15 minutes after every hour
  onTick: minutefifteenth,
  start: true,
  timeZone: "America/Los_Angeles"
});
