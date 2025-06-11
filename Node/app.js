const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const boatHouseRoutes = require('./routes/boatHouseRoutes');
const cartRoutes = require('./routes/cartRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/boathouses', boatHouseRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/bookings', bookingRoutes);

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(process.env.PORT, () => console.log('Server started'));
});
