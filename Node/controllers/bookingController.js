const Booking = require('../models/booking');

exports.createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create({
      user: req.user.id,
      boathouse: req.body.boathouse,
      date: req.body.date
    });
    res.json(booking);
  } catch (err) {
    next(err);
  }
};

exports.getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('boathouse');
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};
