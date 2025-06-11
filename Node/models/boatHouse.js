const mongoose = require('mongoose');

const boatHouseSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  features: [String]
});

module.exports = mongoose.model('BoatHouse', boatHouseSchema);
