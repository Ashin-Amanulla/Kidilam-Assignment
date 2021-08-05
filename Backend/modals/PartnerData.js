const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
  image: String
});

var PartnerData = mongoose.model('partner', PartnerSchema);

module.exports = PartnerData;