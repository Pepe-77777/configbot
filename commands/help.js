const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()

module.exports.help = {
    name:"help"
  }

module.exports.run = async (bot, message, args) => {
    let Help = new Discord.MessageEmbed() 
    .setColor("#6400b6")

    .setTitle(`Comandos`)
    .addField("$ping ",  "*Veja o ping do BOT!*")
    .addField("$serverinfo ", "*Veja as informações do server*")
    .addField("$say ", "*Fassa o bot falar!*")
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(Help);

   message.delete();
}
