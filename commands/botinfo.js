const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
    let HelpInvite = `https://discord.gg/EmMr3rpNqu`;
    let botinfo = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setTitle(`BotInfo`)
    .setDescription(`Ei, `+""+"[Clique aqui]("+HelpInvite+")"+" para entrar no nosso server de suporte")
    .addField('**<:js:817102898579374160> Programado em:**', 'JavaScript')
    .addField('**<:dev:817101482263707700> Biblioteca:**', 'Discord.js (node.js)')
    .addField('**<a:verificado:817101452119506985> Criador do bot:**', 'Pepê#7777')
    .addField('**<:nitro:821599274542170113> Estou em:**', `${bot.guilds.cache.size} servidores`)
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(botinfo);

}

module.exports.help = {
  name:"botinfo"
}