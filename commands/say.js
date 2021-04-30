const Discord = require("discord.js"); 

module.exports.help = {
    name:"say"
  }

exports.run = async (client, message, args) => {
    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Você não tem a permissão `MANAGE_MESSAGES`')
    let sendMessage = message.content.substring(9);
    
    message.channel.send(`${sendMessage}` + `,  ` + `||**Enviado por ${message.author}**||`)
        console.log(`Say: ${sendMessage}, usuario: ${message.author.tag}`)

}
