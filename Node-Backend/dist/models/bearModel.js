'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var bearSchema = new Schema({
    name: String
});

var Bear = _mongoose2.default.model('Bear', bearSchema);

module.exports = Bear;