const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let avatar = new Discord.MessageEmbed() 
  .setColor("random")
  .setTitle('Avatar')
  .setImage(`${message.author.displayAvatarURL({dynamic: true})}`)
  .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

  message.channel.send(avatar);

 message.delete();
}
  
  module.exports.help = {
      name: "avatar"
  }