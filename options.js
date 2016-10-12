var config = require('./config');

var options = {
  id: config.geckoboard.dataset,
  fields: {
    airportcode: {
      type: 'string',
      name: 'Airport Code'
    },
    airportname: {
      type: 'string',
      name: 'Airport name'
    },
    datestart: {
      type: 'datetime',
      name: 'Start Time'
    },
    dateend: {
      type: 'datetime',
      name: 'End Time'
    },
    flights: {
      type: 'number',
      name: 'Total number of flights'
    },
    canceled: {
      type: 'number',
      name: 'Number of canceled flights'
    },
    ontime: {
      type: 'number',
      name: 'Number of flights on time'
    },
    delayed15: {
      type: 'number',
      name: 'Number of flights delayed 15 min'
    },
    delayed30: {
      type: 'number',
      name: 'Number of flights delayed 30 min'
    },
    delayed45: {
      type: 'number',
      name: 'Number of flights delayed 45 min'
    }
  }
}

module.exports = options;
