const express = require('express');
var EventData = require('../modals/eventData');
let app = express.Router();


    app.get('/', function (req, res) {
        EventData.find()
            .then(function (eventList) {
                res.send(eventList);
            })
    });

module.exports = app;