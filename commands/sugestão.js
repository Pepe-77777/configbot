const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  
        let message1 = message.content.toLowerCase();
        let sendChannel = `827635163101921342`;
        
            message.delete();
            let sendMessage = message.content.substring(14);
                message.reply('Sugestão: ' + sendMessage + ` Foi feita com sucesso! Veja <#827635163101921342> para votar! *Sugestão enviada por ${message.author}*`)
                message.client.channels.fetch('827635163101921342')
                    .then(channel => {
                        channel.send(`Sugestão: **${sendMessage}**, feita por ${message.author}`)
                    })
                }
    
  module.exports.help = {
      name: "sugestão"
  }