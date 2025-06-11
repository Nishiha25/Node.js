const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  boathouse: { type: mongoose.Schema.Types.ObjectId, ref: 'BoatHouse' },
  date: String
});

module.exports = mongoose.model('Booking', bookingSchema);
