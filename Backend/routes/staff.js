const express = require('express');
const StaffData = require('../modals/staffData');
let app = express.Router();

app.get('/staff', function (req, res) {
    StaffData.find()
        .then(function (staff) {
            res.send(staff);
        })
});

module.exports = app;