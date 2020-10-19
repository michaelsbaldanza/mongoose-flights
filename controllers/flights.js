const Flight = require('../models/flights');

function index(req, res) {
  Flight.find({}).sort('date').exec(function(err, flights) {
    res.render('flights/index', { flights });
  });
};

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', { departsDate: departsDate });
};

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
};

module.exports = {
  index: index,
  new: newFlight,
  create: create,
};