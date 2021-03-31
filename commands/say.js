const Discord = require("discord.js"); 

module.exports.help = {
    name:"say"
  }

exports.run = async (client, message, args) => {
    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Você não tem a permissão `MANAGE_MESSAGES`')
    let sendMessage = message.content.substring(7);

    if(sendMessage === "<@!825145028757159976>") {
      message.reply('Por favor, não mencione EVERYONE ou HERE!');
    }
    
    let Say = new Discord.MessageEmbed() 
    .setColor("#6400b6")

    .addField(`${sendMessage}`, `||Autor: ${message.author.tag}||`)

        console.log(`Say: ${sendMessage}, usuario: ${message.author.tag}`)

    message.channel.send(Say)
}
