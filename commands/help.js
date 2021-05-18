const options = ["Figure it out yourself", "Calling 911"];

module.exports = {
	name: 'help',
	description: 'Beep!',
	execute(message) {
        const response = options [Math.floor(Math.random()*options .length)];
		message.channel.send(response);
	},
};