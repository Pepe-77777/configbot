const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()

module.exports.help = {
    name:"help"
  }

module.exports.run = async (bot, message, args) => {
    let HelpInvite = `https://discord.gg/EmMr3rpNqu`;
    let Help = new Discord.MessageEmbed() 
    .setColor("#6400b6")

    .setTitle(`Comandos`)
    .addField("pepe!diversão",  "*Veja os comandos de diversão!*")
    .addField("pepe!utilidades", "Veja os comandos uteis!")
    .setDescription(`Ei, `+""+"[Clique aqui]("+HelpInvite+")"+" para entrar no nosso server de suporte")
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(Help);

   message.delete();
    }
  
