const BoatHouse = require('../models/boatHouse');

exports.createBoatHouse = async (req, res, next) => {
  try {
    const boat = await BoatHouse.create(req.body);
    res.json(boat);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const boats = await BoatHouse.find();
    res.json(boats);
  } catch (err) {
    next(err);
  }
};
