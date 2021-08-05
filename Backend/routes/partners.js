const express = require('express');
const PartnerData = require('../modals/PartnerData');
let app = express.Router();

app.get('/', function (req, res) {
    PartnerData.find()
        .then(function (partner) {
            res.send(partner);
        })
});

module.exports = app;