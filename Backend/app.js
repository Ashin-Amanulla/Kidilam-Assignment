const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();

const port = process.env.PORT || 8887;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); //middleware portion for adding data
app.use(cors());
app.use(express.json());



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});

const Coursedata = require('./modals/CourseData');
const CourseRegistrationdata = require('./modals/CourseRegistrationData');
const Testimonialdata = require('./modals/TestimonialData');


app.get('/CourseList', function (req, res) {
    Coursedata.find().sort({ _id: -1 })
        .then(function (courses) {
            res.send(courses);
        });
});

app.get('/Course/:id', (req, res) => {
    const id = req.params.id;
    Coursedata.findOne({ "_id": id })
        .then((course) => {
            res.send(course);
        });
})

app.get('/CourseTestimony/:id', (req, res) => {
    const id = req.params.id;
    Testimonialdata.find({ "course_id": id })
        .then((testimonials) => {
            res.send(testimonials);
        });
})


app.get('/CourseCategory', function (req, res) {
    Coursedata.find().sort({ Reg_Status: -1 })
        .then(function (courses) {
            res.send(courses);
        });
});

app.post('/registercourse', function (req, res) {

    var RegistrationItem = {
        course_id: req.body.course_id,
        course_title: req.body.course_title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailaddress: req.body.emailaddress,
        phoneno: req.body.phoneno,
        employed: req.body.employed,
        graduation: req.body.graduation,
        message: req.body.message
    }

    CourseRegistrationdata.find({ 'emailaddress': RegistrationItem.emailaddress, 'course_id': RegistrationItem.course_id })
        .then(function (cousrseReg) {
            var bexist = false;
            console.log(`fetched from db Email ID - ${RegistrationItem.emailaddress}, coursetitle - ${RegistrationItem.course_title}`)
            for (var i = 0; i < cousrseReg.length; i++) {
                if ((cousrseReg[i].emailaddress == RegistrationItem.emailaddress) && (cousrseReg[i].course_id == RegistrationItem.course_id)) {
                    bexist = true;
                }
            };
            if (bexist) {
                console.log(`Email ID is already registered for the course ${RegistrationItem.course_title}`);
                res.status(401).send(`Email ID is already registered for the course ${RegistrationItem.course_title}`)
            }
            else {
                var vUser = CourseRegistrationdata(RegistrationItem);
                vUser.save();
                console.log(`The registered user added is : Email ID - ${RegistrationItem.emailaddress}, Course - ${RegistrationItem.course_title}`);
                res.status(200).send({ RegistrationItem })
            }
        });
});



const partners = require('./routes/partners');
app.use('/partners', partners);

const partnersApplicationForm = require('./routes/partnerForm');
app.use('/PartnershipApplication', partnersApplicationForm);

const corporateApplicationForm = require('./routes/corporateForm');
app.use('/CorporateApplication', corporateApplicationForm);


const enquiryForm = require('./routes/EnquiryForm');
app.use('/EnquiryApplication', enquiryForm);

const staff = require('./routes/staff');
app.use('/about', staff);

const eventList = require('./routes/event');
app.use('/EventList',eventList)


app.listen(port, () => {
    console.log("Server ready at" + port)
});