const Discord = require("discord.js"); 

module.exports.help = {
    name:"youtube"
  }

exports.run = async (client, message, args) => {
    message.delete();
    let sendMessage = message.content.substring(13);
    message.reply(`Resultado da pesquisa: https://www.youtube.com/results?search_query=${sendMessage.replace( /\s/g, "+")}`)
}
