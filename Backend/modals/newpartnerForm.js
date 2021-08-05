const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const PartnershipApplicationSchema = new Schema({    
        name: String,
        email: String,
        phone: String,
        firm: String,
        address: String,
        district: String,
        officeSpace: String,
        report: String,
        expect: String,
        profile: String,
        employeeCount: String,
        creation_date: Date
      });
      

var NewPartnerApplicationData = mongoose.model('partnershipApplication', PartnershipApplicationSchema);

module.exports = NewPartnerApplicationData;