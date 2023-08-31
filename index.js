/*
*   t.me/dsaAlgorithm_bot
*/
const { Telegraf } = require('telegraf');
const bot = new Telegraf('6439069319:AAEWPbsrinJeaM-H5XbTgwlyvq3kvVsxcD0');

console.log("Server started");

bot.start((ctx) => ctx.reply('Welcome'));

bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.command('hipster', Telegraf.reply('λ'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));