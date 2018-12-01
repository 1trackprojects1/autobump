const Discord = require('discord.js');
const client = new Discord.Client();

console.log('[BOT] AutoBump Bot Started...');

client.on('ready', () => {
	console.log(`Bump Bot : ${client.user.tag}!`);
	let embed = new Discord.RichEmbed()
	.setDescription('Auto Bump v2!')
	.setColor('#1f153')
	.addField('Auto Bump:', ' Started.')
	.addField('Made by', ' trackprojectsinc');
	client.channels.get('CHANNEL-ID-TO-BUMP').send(embed);
	client.user.setActivity('autobump by trackprojectsinc!');
	function bump() {
		console.log(`[BUMP] BUMPED!`);
		client.channels.get('CHANNEL-ID-TO-BUMP').send('!disboard bump');
	};
	setInterval(function() {
		bump()
	}, 10800000);
});

client.login(''); // user token
