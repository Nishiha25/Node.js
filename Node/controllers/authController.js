const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
      const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ error: 'User exists' });

    const user = await User.create({ username, password });
    res.json({ message: 'Registered', user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: 'Logged in', token });
  } catch (err) {
    next(err);
  }
};
