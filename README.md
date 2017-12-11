# NodeJs-SDK
NodeJS Library for https://aviation-edge.com/

# Installation
```
$ npm install aviation-edge
```

# Sample Examples
```
try {

  var aviation = require('aviation-edge');
  var ae = new aviation('api-key');

  //City
  ae.apiCall('cityDatabase',{codeIataCity: 'AAA',codeIso2Country: 'PF'}, function(response) {
   console.log(response);

  });

  //Benchamrk Cities
  ae.apiCall('benchmarkCities',{codeIataCity: 'AAA',codeIso2Country: 'PF'}, function(response) {
    console.log(response);

  });


  //Country
  ae.apiCall('countryDatabase',{codeIso2Country: 'PF',nameCountry: 'French Polynesia'}, function(response) {
    console.log(response);

  });

  //Airport
  ae.apiCall('airportDatabase',{codeIataAirport: 'AAA',codeIso2Country: 'PF'}, function(response) {
    console.log(response);

  });

  //Benchamrk Airport
  ae.apiCall('benchmarkAirports',{codeIataAirport: 'AAA',codeIso2Country: 'PF'}, function(response) {
    console.log(response);

  });

  //Airline
  ae.apiCall('airlineDatabase',{codeIataAirline: 'AA',codeIso2Country: 'US'}, function(response) {
    console.log(response);

  });

  //Benchamrk Airline
  ae.apiCall('benchmarkAirlines',{codeIataAirline: 'AA',codeIso2Country: 'US'}, function(response) {
    console.log(response);

  });

  //Airplane
  ae.apiCall('airplaneDatabase',{numberRegistration: 'HB-JVE',hexIcaoAirplane: '4B19EA'}, function(response) {
    console.log(response);

  });

  //Aircrafts
  ae.apiCall('planeTypeDatabase',{codeIataAircraft: '100'}, function(response) {
    console.log(response);

  });

  //Tax
  ae.apiCall('taxDatabase',{codeIataTax: 'AB'}, function(response) {
    console.log(response);

  });

  // Real Time Flights Informations
  ae.apiCall('flight',{iataCode: 'LGA',type: 'departure'}, function(response) {
    console.log(response);

  });

  //Airport Timetables
  ae.apiCall('timetable',{iataCode: 'LGA',type: 'departure'}, function(response) {
    console.log(response);

  });

  // Routes iataCode=LGA&type=departure
  ae.apiCall('routes',{departureIata: 'CDG', departureIcao: 'LFPG', airlineIata: '0B'}, function(response) {
    console.log(response);

  });

  // NearBy
  ae.apiCall('nearby',{lat: '-5.466667',lng: '122.63333',distance:'1000'}, function(response) {
    console.log(response);

  });


  // autocomplete
  ae.apiCall('autocomplete',{query: 'madrid'}, function(response) {
    console.log(response);

});

} 
catch(e) {
    process.exit(e.code);
}
```
