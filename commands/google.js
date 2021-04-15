const Discord = require("discord.js"); 

module.exports.help = {
    name:"google"
  }

exports.run = async (client, message, args) => {
    message.delete();
    let sendMessage = message.content.substring(12);
    message.reply(`Resultado da pesquisa: https://google.com/search?q=${sendMessage.replace( /\s/g, "+")}`)
}
