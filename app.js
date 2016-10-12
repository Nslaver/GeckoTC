var Client = require('node-rest-client').Client;
var config = require('./config');
var options = require('./options');
var gb = require('geckoboard')(process.env.GECKO_APIKEY);


var client = new Client();


// Load variables from
var args = {
  path : {},
  parameters: { appId: process.env.FLIGHTSTATS_APPID, appKey: process.env.FLIGHTSTATS_APPKEY, codeType : 'IATA'}
};

// registering remote methods
client.registerMethod("getAirportData", "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/${id}", "GET");

/* This will create an API to the endpoint:
 * https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/${id}?appId=FLIGHTSTATS_APPID&appKey=FLIGHTSTATS_APPKEY"
 */
var exports = module.exports = {};

exports.getRow = function getRow(iata, callback){
  args.path.id = iata;
  client.methods.getAirportData(args, function (data, response) {
    var airdata = data.delayIndexes.map(function(current){
      var airportRow = {};
      airportRow.airportcode = current.airport.iata;
      airportRow.airportname = current.airport.name;
      airportRow.datestart = current.dateStart;
      airportRow.dateend = current.dateEnd;
      airportRow.flights = current.flights;
      airportRow.canceled = current.canceled;
      airportRow.ontime = current.onTime;
      airportRow.delayed15 = current.delayed15;
      airportRow.delayed30 = current.delayed30;
      airportRow.delayed45 = current.delayed45;
      return airportRow;
    });
    callback(airdata);
  });
}

exports.insertData = function insertData(data){
  gb.datasets.findOrCreate(
  options,
  function (err, dataset) {
    if (err) {
      console.error(err);
      return;
    }

    dataset.post(
      data
      ,
      { delete_by: 'dateend' }
      ,
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Dataset created and data added');
      }
    );
  }
);
}