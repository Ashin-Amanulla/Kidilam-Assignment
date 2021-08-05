const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const EnquirySchema = new Schema({

    name: String,
    email: String,
    subject: String,
    message: String,
    creation_date: Date,
    responded: Boolean


});


var EnquiryData = mongoose.model('enquiryData', EnquirySchema);

module.exports = EnquiryData;