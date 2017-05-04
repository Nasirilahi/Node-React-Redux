'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express2.default.Router();

userRouter.use(function (req, res, next) {
    console.log('user routes is being called');
    next();
});

userRouter.get('/', function (req, res) {
    res.json({ message: 'User Router' });
});

exports.default = userRouter;