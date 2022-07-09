
const twilioAccount = {
    accountSid: "AC5df9e2475d2cfc9a6bf9b610d924b15c",
    authToken: "6a02b76e4c63059836bf553532264480"
}
const mailAuth = {
    "mailId": 'sudhanmanoharan@gmail.com',
    "pasword": 'bzlcjjyacfmdsjsy',
    "service_provider": 'gmail',
    'from_mail_id': 'sudhanmanoharan@gmail.com'
};

// 727motorcycle@gmail.com
// Royal@7227
// 9445577727
// whats app number 9445577727
// twillo password = 727motorcycle@7227

const portNumber = {
    "port": 3000
};

module.exports = {
    mail: mailAuth,
    port: portNumber,
    twilio: twilioAccount
};
