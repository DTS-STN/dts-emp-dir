const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    GroupName: { type: String },
    CN: { type: String },
    DisplayName: { type: String },
    gcCityEnglish: { type: String },
    gcProvinceNameEnglish: { type: String },
    gcStreetAddressEnglish: { type: String },
    gcTitleEnglish: { type: String },
    postalCode: { type: String },
    sAMAccountName: { type: String },
    telephoneNumber: { type: String },
    UserAccountControl: { type: String },
    Company: { type: String },
    Email: { type: String },
    Level3: { type: String },
    "Division name": { type: String },
    "ClientEmail Alias": { type: String },
    JobTitle: { type: String },
    AccessType: { type: String },
    Appgate: { type: String },
    VPN: { type: String },
    AppGateNbr: { type: String },
    VPNnbr: { type: String },
});

module.exports = mongoose.model('Employee', employeeSchema);