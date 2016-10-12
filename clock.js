var app = require('./app');

var minutefifteenth = function() {
  app.getRow('ATL.PEK.DXB',function(airportRows){
  console.log(airportRows);
  app.insertData(airportRows);
});
  console.log("Running data every 15 minutes");
}
var CronJob = require('cron').CronJob;
new CronJob({
  cronTime: "15 * * * *",//15 seconds after every minute
  onTick: minutefifteenth,
  start: true,
  timeZone: "America/Los_Angeles"
});

