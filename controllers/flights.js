const Flight = require('../models/flights');

function index(req, res) {
  Flight.find({}).sort('departs').exec(function(err, flights) {
    console.log(flights);
    res.render('flights/index', { flights });
  });
};

function getFlightNo() {
  let newFlightNo = Math.floor(Math.random() * Math.floor(10000));
  if (newFlightNo === 10000) newFlightNo -= 1;
  if (newFlightNo < 1000) newFlightNo += 1000;
  return newFlightNo;
};


function newFlight(req, res) {
  const newFlightNo = getFlightNo();
  const newFlight = new Flight();
  const dt = newFlight.departs;
  let departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', { departsDate: departsDate, newFlightNo: newFlightNo });
};

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { flight: flight });
  });
};

module.exports = {
  index: index,
  new: newFlight,
  create: create,
  show: show,
};