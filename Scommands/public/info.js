const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow,MessageEmbed, MessageAttachment, MessageSelectMenu, MessageButton, WebhookClient, Client, Collection, Discord, Util } = require('discord.js');
const db = require('pro.db');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("show info")
,

    async execute(client, interaction){
const info = new MessageEmbed()

.setDescription(`**- <:discotoolsxyzicon83:1246210989536575548> [Discord Server](<https://discord.gg/FgYdXbA4uY>)
- <:discotoolsxyzicon77:1245455981521928263> [Bot Invite](<https://discord.com/oauth2/authorize?client_id=986575112356630548&permissions=280576&scope=bot>)
**`)


      const row = new MessageActionRow()
.addComponents(
  
  
new MessageButton()
.setURL(`https://discord.gg/VvEc3Y5VBc`)
.setLabel('Support')
.setStyle('LINK'),

);

      interaction.reply({embeds:[info],components:[row]})
      
    }
}
  