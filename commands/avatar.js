const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.mentions.users.size) {
    message.delete();
    message.reply('Ninguém foi mencionado!');
    return;
}

  const user = message.mentions.users.first() || message.author;
  let avatar5 = `${user.avatarURL()}?size=4096`;
  const avatarEmbed = new Discord.MessageEmbed()
      .setDescription(`<@!${user.id}>`+" Clique aqui para fazer o "+"[download]("+avatar5+")")
      .setColor(0x333333)
      .setAuthor(user.username)
      .setImage((`${user.avatarURL()}?size=4096`))
  message.channel.send(avatarEmbed);

 message.delete();
}
  
  module.exports.help = {
      name: "avatar"
  }