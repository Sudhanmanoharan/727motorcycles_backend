const mailAuth = {
    "mailId": 'sudhanmanoharan@gmail.com',
    "pasword": 'bzlcjjyacfmdsjsy',
    "service_provider": 'gmail',
    'from_mail_id': 'sudhanmanoharan@gmail.com'
};

const Token = "5593603382:AAGUIU97D3QT57tZsKCEMg7ro-eCeqK_TXM";
const TelegramURL = `https://api.telegram.org/bot${Token}/sendMessage`;
const CHAT_ID = 2023722483;

const portNumber = {
    "port": 3000
};

module.exports = {
    mail: mailAuth,
    port: portNumber,
    telegramToken: Token,
    telegramURL: TelegramURL,
    telegramChatId: CHAT_ID
};
