'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bearModel = require('../models/bearModel');

var _bearModel2 = _interopRequireDefault(_bearModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bearRouter = _express2.default.Router();

bearRouter.use(function (req, res, next) {
  console.log('Bear Router');
  next();
});

bearRouter.get('/', function (req, res) {
  res.json({ message: 'Bear Router is getting called' });
});

bearRouter.route('/bears').post(function (req, res) {
  var bear = new _bearModel2.default();
  bear.name = req.body.name;
  bear.save(function (err) {
    if (err) res.send(err);
    res.json({ message: 'Bear created!' });
  });
}).get(function (req, res) {
  _bearModel2.default.find(function (err, bears) {
    if (err) res.send(err);
    res.json(bears);
  });
});

bearRouter.route('/bears/:bear_id').get(function (req, res) {
  var bear_id = req.params.bear_id;

  _bearModel2.default.findById(bear_id, function (err, bear) {
    if (err) res.send(err);
    res.json(bear);
  });
}).put(function (req, res) {
  var bear_id = req.params.bear_id;

  _bearModel2.default.findById(bear_id, function (err, bear) {
    if (err) res.send(err);
    bear.name = req.body.name;
    bear.save(function (err) {
      if (err) res.send(err);
      res.send({ message: ' Bear information has been updated' });
    });
  });
}).delete(function (req, res) {
  var bear_id = req.params.bear_id;

  _bearModel2.default.remove({ _id: bear_id }, function (err, bear) {
    if (err) res.send(err);
    res.json({ message: ' Bear has been deleted successfully' });
  });
});

exports.default = bearRouter;