const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Autor do bot: https://pt.namemc.com/profile/Pepe_Java**`)

 message.delete();
}
  
  module.exports.help = {
      name: "autor"
  }