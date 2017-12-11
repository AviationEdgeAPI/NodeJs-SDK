try {

  var aviation = require('aviation-edge');
  var ae = new aviation('api-key');

  //City
  ae.apiCall('cityDatabase',{codeIataCity: 'AAA',codeIso2Country: 'PF'}, function(response) {
    console.log(response);
    
  });

} 
catch(e) {
    process.exit(e.code);
}


