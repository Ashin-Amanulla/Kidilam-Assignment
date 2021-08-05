const express = require('express');
const corporateApplicationData = require('../modals/newcorporateForm');
let app = express.Router();

app.post('/', function (req, res) {



    let item = {

        name: req.body.corporate.name,
        address: req.body.corporate.address,
        website: req.body.corporate.website,
        head: req.body.corporate.head,
        nature: req.body.corporate.nature,
        typeof: req.body.corporate.typeof,
        identityNo: req.body.corporate.identityNo,
        GST: req.body.corporate.GST,
        nameofContact: req.body.corporate.nameofContact,
        phone: req.body.corporate.phone,
        email: req.body.corporate.email,
        TechnicalSkill: req.body.corporate.TechnicalSkill,
        employeeCount: req.body.corporate.employeeCount,
        hire: req.body.corporate.hire,
        patents: req.body.corporate.patents,
        collaborate: req.body.corporate.collaborate,
        details: req.body.corporate.details,
        creation_date: new Date(),


    }
    let newcorporate = corporateApplicationData(item);
    console.log("backend", item)
    newcorporate.save().then(function (data) {
        res.send(true)
    }).catch(function (error) {
        res.send(false)
    })

});

module.exports = app;