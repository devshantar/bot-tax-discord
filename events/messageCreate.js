const { MessageActionRow, MessageAttachment, MessageSelectMenu, MessageButton,WebhookClient, MessageEmbed, Client, Collection, Discord } = require('discord.js');
const fs = require("fs")
const db = require('pro.db');

const client = new Client({
    intents: 32767,
});

module.exports = {
	name: 'messageCreate',
	execute(message) {
if (message.author.bot) return;
if (message.channel.type == "dm") return;

  let c = db.fetch(`tax1_${message.guild.id}`)
  if (message.channel.id === c) {
      let args = message.content.split(" ").slice(0).join(" ");
let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
      if (isNaN(args)) return message.channel.send({content: `> ** The Value Must Be Number**`})
    message.channel.send({content:`> **<:takeoff:1003375950240682054> Your tax is: ${tax}**`})
 
}

    
     
  let c2 = db.fetch(`tax2_${message.guild.id}`)
  if (message.channel.id === c2) {
      let args = message.content.split(" ").slice(0).join(" ");
let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
      if (isNaN(args)) return message.channel.send({content: `> ** The Value Must Be Number**`})
    const taxe = new MessageEmbed()

.setDescription(`> **<:takeoff:1003375950240682054> Your tax is: ${tax}**`)

      .setColor(`286fe7`)
    message.channel.send({embeds:[taxe]})
 
}

  let c3 = db.fetch(`tax3_${message.guild.id}`)
  if (message.channel.id === c3) {
      let args = message.content.split(" ").slice(0).join(" ");
let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (20) )  
      if (isNaN(args)) return message.channel.send({content:`> ** The Value Must Be Number**`})
      message.channel.send({content:`**
> 💳 The value without tax : ${args}
> 💵 The tax : ${tax3}
> 💰 The number with tax : ${tax}
      **`})
 
}

    
  }
}