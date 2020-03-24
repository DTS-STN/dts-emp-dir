const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    FirstName: { type: String },
    Passoword: { type: String }
});

module.exports = mongoose.model('Account', accountSchema);