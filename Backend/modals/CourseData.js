const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    course_title: String,
    course_image: String,
    course_short_desc: String,
    course_long_Desc: String,
    Reg_Status: Number,
    Category: String,
    Rating: Number,
    about_course: String,
    creation_date: Date,
});

var Coursedata = mongoose.model('course', CourseSchema);

module.exports = Coursedata;