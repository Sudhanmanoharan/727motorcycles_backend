const express = require('express');
const emailService = require('../services/mailService');
const router = express.Router();
const chalk = require('chalk');


//....... User Check Price API in webite ......

router.post("/check-price", (req, res) => {
    const resData = {};
    if (req.body.vehicleModal && req.body.mobileNumber) {
        const userDetails = '<div>' +
            ' <b> Vehicle Modal : ' + req.body.vehicleModal + '</b>' +
            ' <br> ' +
            ' <b> Mobile Number : ' + req.body.mobileNumber + '</b>' +
            '</div>'
        emailService.mail(userDetails).then((mailRes) => {
            resData.result = 'Success';
            resData.message = 'Your Price Request sended succesfully';
            res.send(resData);
        }, (err)=>{
            resData.result = 'Failure';
            resData.message = err;
            res.send(resData);
        });
    }
});

module.exports = router;
