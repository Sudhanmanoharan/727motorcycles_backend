const express = require('express');
const emailService = require('../services/mailService');
const telegramService = require('../services/telegramService');
const router = express.Router();
const chalk = require('chalk');
let emailFlag = 0;
let telegramFlag = 0;

//....... User Check Price API in webite ......

router.post("/check-price", (req, res) => {
    const resData = {};
    if (req.body.vehicleModal && req.body.mobileNumber) {
        const userDetails =
            'Hi,' +
            '<br>' +
            'You have new price request.' +
            '<br>' +
            '<br>' +
            '<div>' +
            ' <b> Vehicle Modal : ' + req.body.vehicleModal + '</b>' +
            ' <br> ' +
            ' <b> Mobile Number : ' + `<a href="tel:+91${req.body.mobileNumber}"> `+ req.body.mobileNumber + '</a>'+ '</b>' +
            '</div>' +
            '<br>' +
            'Thanks,' +
            '<br>' +
            '727Motorcycles'

            console.log("email service");
        emailService.mail(userDetails).then((mailRes) => {
            resData.result = 'Success';
            resData.message = 'Your price request sended succesfully';
            res.send(resData);
        }, (err) => {
            resData.result = 'Failure';
            resData.message = err;
            res.send(resData);
        });
        telegramService.telegram(req.body).then((telegramResponse) => {
            telegramFlag = 1;
        }, (err) => {
            telegramFlag = 0;
            resData.result = 'Failure';
            resData.message = err;
        });
    }
});

module.exports = router;
