const auth = require('../config/auth');
const client = require('twilio')(auth.twilio.accountSid, auth.twilio.authToken);

function sendWhatsapp(mobileNumber) {
    return new Promise((resolve, reject) => {
        client.messages
            .create({
                from: 'whatsapp:+14155238886',
                body: 'Hello there!',
                to: 'whatsapp:+919487587063'
            })
            .then((message) => {
                resolve(resData);
                console.log(message.sid)
            }, (err) => {
                reject(err);
            });
    });
}

module.exports = {
    sendwbm: sendWhatsapp
};