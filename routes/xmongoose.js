var store = require('./store')

var mongoose = require('mongoose')
// use main connection to database instead of "createConnection" to add new.
// mongoose.connect('mongodb://'+process.env.IP+'/TESTONLY')
mongoose.connect('mongodb://admin:Y_lHLbcQK7Cx@' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT + '/ninjastorelak')
var db = mongoose.connection
var Schema = mongoose.Schema
var itemSchema = new Schema({
  name: String,
  price: Number
})
var item = mongoose.model('item', itemSchema)

db.on('error', console.error.bind(console, 'connection error:'))

// remove collection then recreate
db.once('open', function callback () {
  console.log('Connected to Mongo.')

  item.remove({}, function (err) {
    console.log('collection removed')
  })

  /**/
  var i
  i = new item({ name: 'Truck', price: 100 })
  i.save(function (err) {if (err) {console.log('db save error.')}})
  i = new item({ name: 'Car', price: 200 })
  i.save(function (err) {if (err) {console.log('db save error.')}})
  i = new item({ name: 'Taxi', price: 100 })
  i.save(function (err) {if (err) {console.log('db save error.')}})
  i = new item({ name: 'Bus', price: 500 })
  i.save(function (err) {if (err) {console.log('db save error.')}})
  /**/

})

// just find all in 'item' collection
exports.fetchItems = function () {
  item.find({}, function (err, i) {
    if (err) {console.log('Error in find.');}

    store.theItems = i
    console.log(i)
  })
}
