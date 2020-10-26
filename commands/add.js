const Players = require('../models/players');

module.exports = {
    name: 'add',
    description: 'Adds player to Players model',
    execute(message) {
		const newPlayer = new Players({
            discordId: message.author,
            displayName: message.member.displayName,
        });

        Players.create(newPlayer);

		message.channel.send(`Added ${message.member.displayName} to Players model!`);
	},
};