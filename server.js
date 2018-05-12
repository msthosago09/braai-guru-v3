var express  = require('express');
var app      = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_7dkkjm9t:MahobalA8#@ds113640.mlab.com:13640/heroku_7dkkjm9t');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var MenuItem = mongoose.model('MenuItem', {
  description: String,
  price: Number
});

var Order = mongoose.model('Order', {
  description: String,
  quantity: Number
});

app.get('/api/orders', function(req, res) {
  console.log("fetching orders");
  Order.find(function(err, orders) {
    if (err)
      res.send(err)
    res.json(orders);
  });
});

app.post('/api/orders', function(req, res) {
  console.log("creating order");

  Order.create({
    description : req.body.description,
    quantity: req.body.quantity
  }, function(err, order) {
    if (err)
      res.send(err);
    Order.find(function(err, orders) {
      if (err)
        res.send(err)
      res.json(orders);
    });
  });
});

app.get('/api/menuitems', function(req, res) {
  console.log("fetching menuitems");
  MenuItem.find(function(err, menuitems) {
    if (err)
      res.send(err)
    res.json(menuitems);
  });
});

app.post('/api/menuitems', function(req, res) {
  console.log("creating order");

  MenuItem.create({
    description : req.body.description,
    price: req.body.price
  }, function(err, order) {
    if (err)
      res.send(err);
    MenuItem.find(function(err, menuitems) {
      if (err)
        res.send(err)
      res.json(menuitems);
    });
  });
});

