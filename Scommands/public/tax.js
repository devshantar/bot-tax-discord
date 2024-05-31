const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow,MessageEmbed, MessageAttachment, MessageSelectMenu, MessageButton, WebhookClient, Client, Collection, Discord, Util } = require('discord.js');
const db = require('pro.db');
const probot = require("probot-tax");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("tax")
    .setDescription("show probot tax")
    .addStringOption(option => option.setName('number').setDescription(`The number to show it's tax`)),

    async execute(client, interaction){
const args = interaction.options.getString('number')

let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (20) )  
      if (isNaN(args)) return interaction.reply({content:`> ** The Value Must Be Number**`})
      interaction.reply({content:` ** - <:discotoolsxyzicon76:1239583205192110150> The value without tax : ${args}
- <:discotoolsxyzicon77:1239584316045004810> The tax : ${tax3}
- <:discotoolsxyzicon72:1239583216881631264> The number with tax : ${tax} **`})

    }
}
