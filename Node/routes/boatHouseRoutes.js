const express = require('express');
const router = express.Router();
const Boathouse = require('../models/boatHouse');
const auth = require('../middlewares/auth');

// Create boathouse
router.post('/', auth, async (req, res) => {
  try {
    const boat = new Boathouse(req.body);
    await boat.save();
    res.status(201).json(boat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all boathouses
router.get('/', async (req, res) => {
  try {
    const boats = await Boathouse.find();
    res.json(boats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
