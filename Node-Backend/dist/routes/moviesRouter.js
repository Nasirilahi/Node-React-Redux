'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moviesRouter = _express2.default.Router();

moviesRouter.use(function (req, res, next) {
    console.log('movies router is getting called');
    next();
});

moviesRouter.get('/', function (req, res) {
    res.json({ message: 'Movie Router' });
});

exports.default = moviesRouter;