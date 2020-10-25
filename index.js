const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();

client.mongoose = require('./utils/mongoose');

client.once('ready', () => {
	console.log('Ready!');
});

client.mongoose.init();
client.login(process.env.RANKEDCHAOS_TOKEN);