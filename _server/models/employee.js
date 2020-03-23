const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    Email: { type: String },
    Division: { type: String },
    JobTitle: { type: String },
    Location: { type: String },
    DeviceType: { type: String },
    RemoteType: { type: String },
    WorkPhone: { type: String },
    CellPhone: { type: String }
});

module.exports = mongoose.model('Employee', employeeSchema);