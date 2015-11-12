var store = require('./store');

// our mysql database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'awsmysql.cuuagsmfyvhg.us-east-1.rds.amazonaws.com',
  database : 'TESTONLY',
  user     : 'TESTONLY',
  password : 'TESTONLY'
});
connection.connect();
connection.query('SELECT * from nj_items', function(err, results) {
  if (err) throw err;
  
  //console.log('got ' + results.length + ' results.');
  //for (var i = 0; i < results.length; i++)
  //  console.log('got item: ' + results[i].name);
  
  console.log(results);

  store.theItems = results;
});
connection.end();

