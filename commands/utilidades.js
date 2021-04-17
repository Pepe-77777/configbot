const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()

module.exports.help = {
    name:"utilidades"
  }

module.exports.run = async (bot, message, args) => {
  let HelpInvite = `https://discord.gg/EmMr3rpNqu`;
    let utilidades = new Discord.MessageEmbed() 
    .setColor("#6400b6")

    .setTitle(`Comandos`)
    .setDescription(`Ei, `+""+"[Clique aqui]("+HelpInvite+")"+" para entrar no nosso server de suporte")
    .addField("pepe!clear",  "*Limpe as mensagens!*")
    .addField("pepe!serverinfo", "*Veja as informações do server!*")
    .addField("pepe!ping", "*Veja o ping do bot!*")
    .addField("pepe!invite", "*Invite o bot para o seu server!*")
    .addField("pepe!botinfo", "*Veja as informações do bot!*")
    .addField("pepe!ram", "Veja as informações da RAM")
    .addField("pepe!cpu", "Veja as informações da CPU")
    .addField("pepe!servericon", "Veja o icone do server")
    .addField("pepe!userinfo", "Veja as informações do usuário")
    .addField("pepe!sugestão", "Mande uma sugestão para o bot!")
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 
    message.channel.send(utilidades);

   message.delete();
}
