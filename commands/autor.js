const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    message.channel.send(`**Autor do bot: Pepê#7777**`)
    message.channel.send('https://cdn.discordapp.com/avatars/790332056021630996/a_b98632ee4754901303745e0068e17261.gif?size=2048')
}
  
  module.exports.help = {
      name: "autor"
  }