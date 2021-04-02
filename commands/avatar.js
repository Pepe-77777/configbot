const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.mentions.users.size) {
    message.delete();
    message.reply('Ninguém foi mencionado!');
    return;
}

  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new Discord.MessageEmbed()
      .setColor(0x333333)
      .setAuthor(user.username)
      .setImage(user.displayAvatarURL())
  message.channel.send(avatarEmbed);

 message.delete();
}
  
  module.exports.help = {
      name: "avatar"
  }
