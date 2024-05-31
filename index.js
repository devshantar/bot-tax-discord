const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('dev sasa')
});
app.listen(3000, () => {
  console.log('server started');
});
const db = require('pro.db');
const { MessageActionRow,Intents, MessageAttachment, MessageSelectMenu, MessageButton,WebhookClient, MessageEmbed, Client, Collection, Discord, Permissions } = require('discord.js');




const client = new Client({
	intents: new Intents(32767)
})




const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs")
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
const prefix = "+"
client.setMaxListeners(0)
const commands = [];
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
const CMD = [];
client.Scommands = new Collection();


client.on('ready', () => {
const clientId = client.user.id
  
client.on('interactionCreate', interaction => {
  if (!interaction.isCommand()) return;
    const command = client.Scommands.get(interaction.commandName)
    if (!command) return
    try{

  command.execute(client, interaction)
} catch(err){
  if (err){
  console.log(err)
}

    }
})


const S2Files = fs.readdirSync(`./Scommands/public/`).filter(file => file.endsWith('.js'));
S2Files.forEach(file => {
    const S2command = require(`./Scommands/public/${file}`);
    CMD.push(S2command.data.toJSON());
    client.Scommands.set(S2command.data.name, S2command);
})


const rest = new REST({ version: '9' }).setToken(process.env.token);
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(
	Routes.applicationCommands(clientId),
			{ body: CMD },
		);
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

})





client.on('messageCreate', message =>{
if(message.content.startsWith(prefix +"uptime")){
  let days = Math.floor(message.client.uptime / 86400000);
let hours = Math.floor(message.client.uptime / 3600000) % 24;
let minutes = Math.floor(message.client.uptime / 60000) % 60;
let seconds = Math.floor(message.client.uptime / 1000) % 60;
message.reply(`${seconds}s ${minutes}m ${hours}h ${days}d`)
}
})
client.login(process.env.token); 
