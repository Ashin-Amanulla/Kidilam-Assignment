const express = require('express');
const TestimonialData = require('../modals/TestimonialData');
let app = express.Router();

app.get('/testy', function (req, res) {
    TestimonialData.find()
        .then(function (test1) {
            res.send(test1);
        })
});

module.exports = app;