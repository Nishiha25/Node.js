const Cart = require('../models/cart');

exports.createCart = async (req, res, next) => {
  try {
    const cart = await Cart.create({ user: req.user.id, boats: req.body.boats });
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

exports.getUserCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find({ user: req.user.id }).populate('boats');
    res.json(carts);
  } catch (err) {
    next(err);
  }
};
