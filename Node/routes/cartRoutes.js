const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const auth = require('../middlewares/auth');

// Create a cart
router.post('/', auth, async (req, res) => {
  try {
    const cart = new Cart({
      user: req.user.id,
      boats: req.body.boats
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all carts for a user
router.get('/', auth, async (req, res) => {
  try {
    const carts = await Cart.find({ user: req.user.id }).populate('boats');
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
