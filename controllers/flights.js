const Flight = require('../models/flights');

function index(req, res) {
  res.render('flights/index');
};

function newFlight(req, res) {
  res.render('flights/new');
};

module.exports = {
  index: index,
  new: newFlight
};