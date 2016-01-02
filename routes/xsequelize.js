var store = require('./store');

var Sequelize = require("sequelize");
var sq = new Sequelize('TESTONLY', 'TESTONLY', 'TESTONLY', {
  host: "awsmysql.cuuagsmfyvhg.us-east-1.rds.amazonaws.com",
  port: 3306,
  logging: false, // false or a special function.
  dialect: 'mysql'
});

sq.query("SELECT * FROM `nj_items`", { type: Sequelize.QueryTypes.SELECT}).then(function(myTableRows) {
  console.log(myTableRows);
  store.theItems = myTableRows;
});
