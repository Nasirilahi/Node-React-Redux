import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let bearSchema = new Schema({
    name: String
});

let Bear = mongoose.model('Bear', bearSchema);

module.exports = Bear;