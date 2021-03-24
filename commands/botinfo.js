const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let b = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setTitle(`BotInfo`)
    .setDescription("<:js:817102898579374160> Programação: JavaScript", "<a:verificado:817101452119506985> Criado por Pepê#7777", "<:dev:817101482263707700> Biblioteca: Discord.js")
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(botinfo);

   message.delete();
}

module.exports.help = {
  name:"botinfo"
}