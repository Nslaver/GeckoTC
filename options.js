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
      name: 'Total'
    },
    canceled: {
      type: 'number',
      name: 'Canceled'
    },
    ontime: {
      type: 'number',
      name: 'On time'
    },
    delayed15: {
      type: 'number',
      name: 'Delayed 15 min'
    },
    delayed30: {
      type: 'number',
      name: 'Delayed 30 min'
    },
    delayed45: {
      type: 'number',
      name: 'Delayed 45 min'
    }
  }
}

module.exports = options;
