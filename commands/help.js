const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()

module.exports.help = {
    name:"help"
  }

module.exports.run = async (bot, message, args) => {
    let Help = new Discord.MessageEmbed() 
    .setColor("#6400b6")

    .setTitle(`Comandos`)
    .addField("pp!ping ",  "*Veja o ping do BOT!*")
    .addField("pp!serverinfo ", "*Veja as informações do server*")
    .addField("pp!say (mensagem)", "*Fassa o bot falar!*")
    .addField("pp!botinfo", "*Veja o status do BOT!*")
    .addField("pp!8ball (mensagem)", "Fassa o bot responder você! (comandos que fazem a mesma coisa: pp!pergunta)")
    .addField("pp!avatar", "fecha o seu avatar!")
    .addField("pp!clear", "limpe todas as mensagens de 1 a 99 (se a mensagem for a mais de 14 dias não da para deletar)")
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(Help);

   message.delete();
}
