import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String, 
    username: {type :String, required: true, unique :true},
    location: String,
    meta : {
        age :Number, 
        website: String,
    }
});

let User = mongoose.model('User', userSchema);

module.exports = User ;