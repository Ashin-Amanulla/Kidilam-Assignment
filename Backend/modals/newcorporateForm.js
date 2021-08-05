const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const CorporatepApplicationSchema = new Schema({

    name: String,
    address: String,
    website: String,
    head: String,
    nature: String,
    typeof: String,
    identityNo: String,
    GST: String,
    nameofContact: String,
    phone: String,
    email: String,
    TechnicalSkill: String,
    employeeCount: String,
    hire: String,
    patents: String,
    collaborate: {},
    details: String,
    creation_date: Date


});


var NewCorporateApplicationData = mongoose.model('corporateApplication', CorporatepApplicationSchema);

module.exports = NewCorporateApplicationData;