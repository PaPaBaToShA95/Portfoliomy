const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

// Встав токен твого бота
const token = '7593427894:AAG-TA51WjcGxKF_6Etl_PjnNpFYkSywFgY';
const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(bodyParser.json());

// ID чату з ботом (отримай його через консоль або бот)
const chatId = 'YOUR_CHAT_ID';

// Обробка запиту з сайту
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    if (name && email && message) {
        const text = `Нове повідомлення з сайту:
        Ім'я: ${name}
        Email: ${email}
        Повідомлення: ${message}`;

        bot.sendMessage(chatId, text);
        res.status(200).send('Повідомлення надіслано');
    } else {
        res.status(400).send('Помилка: всі поля обов'язкові для заповнення');
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
