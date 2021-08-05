const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const StaffSchema = new Schema({
     name:String,
     designation: String,
     image: String,
     about: String,
     email :String,
     role:Boolean
});

var StaffsData = mongoose.model('staffdata', StaffSchema);

module.exports = StaffsData;