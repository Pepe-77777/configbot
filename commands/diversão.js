const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()

module.exports.help = {
    name:"diversão"
  }

module.exports.run = async (bot, message, args) => {
  message.delete();
  let HelpInvite = `https://discord.gg/EmMr3rpNqu`;
    let Help = new Discord.MessageEmbed() 
    .setColor("#6400b6")

    .setTitle(`Comandos`)
    .setDescription(`Ei, `+""+"[Clique aqui]("+HelpInvite+")"+" para entrar no nosso server de suporte")
    .addField("pepe!avatar",  "*Veja o avatar da pessoa mencionada!*")
    .addField("pepe!8ball", "Faça o bot responder a sua pergunta!")
    .addField("pepe!say", "Faça o bot falar!")
    .addField("pepe!abraçar", "Abraçe uma pessoa! (comandos iguais: pp!hug)")
    .addField("pepe!kiss", "Beije uma pessoa! (comandos iguais: pp!beijar)")
    .addField("pepe!dado", "Gire um dado!")
    .addField("pepe!trump", "Fassa o trump falar uma coisa!")
    .addField("pepe!namemc", "Pesquise alguma coisa no namemc")
    .addField("pepe!namemcuser", "Veja as informações do usuário")
    .addField("pepe!google", "Pesquise alguma coisa no google")
    .addField("pepe!youtube", "Pesquise alguma coisa no youtube")
    .addField("pepe!ship", "Faça um teste de ship...")
    .addField("pepe!maiorpalavradobrasil", "Veja a maior palavra do brasil!")
    .addField("pepe!ideia", "Mude minha ídeia!")
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(Help);

}
