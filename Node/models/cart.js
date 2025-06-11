const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  boats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BoatHouse' }]
});

module.exports = mongoose.model('Cart', cartSchema);
