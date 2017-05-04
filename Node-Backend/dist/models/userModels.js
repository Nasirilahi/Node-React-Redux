'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    location: String,
    meta: {
        age: NUmber,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

var User = _mongoose2.default.model('User', userSchema);

module.exports = User;