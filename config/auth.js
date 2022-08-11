const mailAuth = {
    "mailId": '727motorcycle@gmail.com',
    "pasword": 'nopfptipweebjisl',
    "service_provider": 'gmail',
    'from_mail_id': '727motorcycle@gmail.com'
};

const Token = "5418887503:AAGFXVwtikd99-w8o8kSuHAO6KpAW6PojzY";
const TelegramURL = `https://api.telegram.org/bot${Token}/sendMessage`;
const CHAT_ID = 5510760687;

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