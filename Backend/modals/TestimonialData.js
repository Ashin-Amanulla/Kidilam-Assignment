const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 


const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
    course_id               : String,
    course_title            : String,
    name                    : String,
    position                : String,
    organisation            : String,
    testimony               : String,
    image                   : String
});

var TestimonialData = mongoose.model('testimonial',TestimonialSchema);

module.exports = TestimonialData;