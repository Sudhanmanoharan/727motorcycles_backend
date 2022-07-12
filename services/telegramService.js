const axios = require('axios').default;
const auth = require('../config/auth');

function sendTelegramMessage(userDetails) {
    return new Promise((resolve, reject) => {
        axios.post(auth.telegramURL, {
            chat_id: auth.telegramChatId,
            text: `Hi,
 You have new price request.
              
 <i>Vehicle Modal :</i> <b>${userDetails.vehicleModal}</b>
 <i>Mobile Number : </i><u><a href="tel:+91${userDetails.mobileNumber}">${userDetails.mobileNumber}</a></u>   

Thanks
727Motorcycles`,
            parse_mode: "HTML"
        })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

module.exports = {
    telegram: sendTelegramMessage
};

