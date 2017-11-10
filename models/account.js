const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Account = new Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Account', Account);
