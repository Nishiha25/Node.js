const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const auth = require('../middlewares/auth');

// Make a booking
router.post('/', auth, async (req, res) => {
  try {
    const booking = new Booking({
      user: req.user.id,
      boathouse: req.body.boathouse,
      date: req.body.date
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user bookings
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('boathouse');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
