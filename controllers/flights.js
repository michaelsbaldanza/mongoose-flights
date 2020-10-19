const Flight = require('../models/flights');

function index(req, res) {
  res.render('flights/index');
};

function newFlight(req, res) {
  res.render('flights/new');
};

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights/new');
  });
};

module.exports = {
  index: index,
  new: newFlight,
  create: create,
};