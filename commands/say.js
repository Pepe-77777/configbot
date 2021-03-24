const Discord = require("discord.js"); 

module.exports.help = {
    name:"say"
  }

exports.run = async (client, message, args) => {
    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Você não tem a permissão `MANAGE_MESSAGES`')
    let sendMessage = message.content.substring(4);

    message.channel.send(sendMessage);
    message.channel.send(`||** _Autor: ${message.author.tag}_**||`, message.author.displayAvatarURL({dynamic: true}));

}
