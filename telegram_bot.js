const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const url = 'https://<PUBLIC-URL>';
const port = process.env.PORT;

const TelegramBot = require('../..');
const express = require('express');
