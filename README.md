# Geckoboard Technical Challenge

Node.Js cron app hosted on Heroku that collects data from Flightstat and upload it to Geckoboard as a dataset.

## Description

The Flightstat API gives the delayed flight information for every airport configured in [config.js](config.js) this process is done in [app.js](app.js) where the flight API is called, then the data is mapped to the data set as declared in [options.js](options.js) to be later inserted to the datasource.

## Tools

* Node.Js, gives every tool to collect from an external source, procees this data and insert in to the datasource.
* Heroku, fast way to deploy the app free of charge, running every 15 minutes

## NPM Dependencies

* cron 1.1.1
* geckoboard 1.1.0
* node-rest-client 2.0.1