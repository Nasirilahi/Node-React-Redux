'use strict';

var _consts = require('./util/consts');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _consts2 = require('./constants/consts');

var _userRouter = require('./routes/userRouter');

var _userRouter2 = _interopRequireDefault(_userRouter);

var _moviesRouter = require('./routes/moviesRouter');

var _moviesRouter2 = _interopRequireDefault(_moviesRouter);

var _bearRouter = require('./routes/bearRouter');

var _bearRouter2 = _interopRequireDefault(_bearRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// configure body parser in encoded url + sending data in json
_consts.app.use(_bodyParser2.default.urlencoded({ extended: true }));
_consts.app.use(_bodyParser2.default.json());

_mongoose2.default.connect(_consts2.mongodbURL);

_consts.app.use('/user', _userRouter2.default);
_consts.app.use('/movie', _moviesRouter2.default);
_consts.app.use('/bear', _bearRouter2.default);

_consts.app.listen(_consts2.PORT, function () {
    console.log('server is running on' + _consts2.PORT);
});