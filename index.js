const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.RANKEDCHAOS_TOKEN);