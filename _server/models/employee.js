const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    Surname: { type: String },
    Givenname: { type: String }
});

module.exports = mongoose.model('Employee', employeeSchema);