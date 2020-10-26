module.exports = {
	name: 'test',
	description: 'test',
	execute(message) {
		const testText = 'This is a test.';

		message.channel.send(testText);
	},
};