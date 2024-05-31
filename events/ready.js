const db = require('pro.db');
const { MessageActionRow,Intents, MessageAttachment, MessageSelectMenu, MessageButton,WebhookClient, MessageEmbed, Client, Collection, Discord } = require('discord.js');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {

console.log(`
----------------------------------
|> bot name :  ${client.user.tag} 
----------------------------------
|> servers : ${client.guilds.cache.size} 
----------------------------------
|> channels : ${client.channels.cache.size} 
----------------------------------
|> users : ${client.guilds.cache
					.reduce((a, b) => a + b.memberCount, 0)
					.toLocaleString()} 
----------------------------------
`);

 client.user.setPresence({activities:[{name: `/tax | ${client.guilds.cache.size} 
 Servers`}],status: 'idle',type: "playing"});




	}
}