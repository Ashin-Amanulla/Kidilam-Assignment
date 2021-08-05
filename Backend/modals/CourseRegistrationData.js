const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const CourseRegistrationSchema = new Schema({
    course_id: String,
    course_title: String,
    firstname: String,
    lastname: String,
    emailaddress: String,
    phoneno: String,
    employed: String,
    graduation: String,
    message: String,
    creation_date: Date,

});

var CourseRegistrationdata = mongoose.model('courseRegistration', CourseRegistrationSchema);

module.exports = CourseRegistrationdata;