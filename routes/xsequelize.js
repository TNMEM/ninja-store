var store = require('./store');

var Sequelize = require("sequelize");
var sequelize = new Sequelize('TESTONLY', 'TESTONLY', 'TESTONLY', {
  host: "awsmysql.cuuagsmfyvhg.us-east-1.rds.amazonaws.com",
  port: 3306,
  logging: false, // false or a special function.
  dialect: 'mysql'
});
sequelize.query("SELECT * from nj_items").success(function(myTableRows) {
  console.log(myTableRows)
  store.theItems = myTableRows;
}).error(function(errors) {
  console.log(errors)
});
