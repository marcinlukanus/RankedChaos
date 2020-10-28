const Players = require('../models/players');

module.exports = {
    name: 'add',
    description: 'Adds player to Players model',
    execute(message, args) {
        const server = args[0] ? args.toUpperCase() : 'US-EAST';

        if (server === 'US-EAST' ||
            server === 'US-WEST' ||
            server === 'EU') {
            const newPlayer = new Players({
                discordId: message.author,
                displayName: message.member.displayName,
                server: server,
            });

            Players.create(newPlayer);

            message.channel.send(`Added ${message.member.displayName} to Players model!`);

            const testRole = message.guild.roles.cache.find(role => role.name === 'Test');
            message.member.roles.add(testRole);
        } else {
            message.channel.send('Invalid `server` argument!');
        }
	},
};