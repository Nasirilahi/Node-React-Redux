'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express2.default.Router();

userRouter.use(function (req, res, next) {
    console.log('user routes is being called');
    next();
});

userRouter.get('/', function (req, res) {
    res.json({ message: 'User Router' });
});

userRouter.route('/users').post(function (req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        username = _req$body.username,
        location = _req$body.location,
        meta = _req$body.meta;

    var newUser = new _userModel2.default({
        name: name,
        username: username,
        location: location,
        meta: meta
    });
    newUser.save(function (err) {
        if (err) res.send(err);
        res.json({ message: 'user created successfully.' });
    });
}).get(function (req, res) {
    _userModel2.default.find(function (err, users) {
        if (err) return res.send(err);
        return res.json(users);
    });
});

userRouter.route('/users/:userId').get(function (req, res) {
    var userId = req.params.userId;

    console.log('asdasdasd', userId);
    _userModel2.default.findById(userId, function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
}).put(function (req, res) {
    var userId = req.params.userId,
        name = req.body.name;

    _userModel2.default.findById(userId, function (err, user) {
        if (err) res.send(err);
        user.name = name;
        user.save(function (err) {
            if (err) res.send(err);
            res.json({ message: 'user updated successfully.' });
        });
    });
}).delete(function (req, res) {
    var userId = req.params.userId,
        name = req.body.name;

    _userModel2.default.findById(userId, function (err, user) {
        if (err) res.send(err);
        user.remove({ _id: userId }, function (err) {
            if (err) res.send(err);
            res.json({ message: 'user deleted' });
        });
    });
});

exports.default = userRouter;