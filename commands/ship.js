const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.mentions.users.size) {
    message.delete();
    message.reply('Ninguém foi mencionado!');
    return;
}
    let shipValor = `${Math.floor(Math.random() * 100 + 1)}`;
  const user = message.mentions.users.first() || message.author;

    let serverembed = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setTitle(`Ship`)
    .setDescription(`**<@!${message.author.id}> fez um teste de ship com ${user}**`)
    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
    .addField(`**Deu ${shipValor}%**`, `Hmmm`)
   
    message.channel.send(serverembed);


    if (shipValor > 50) {
            if (shipValor > 70) {
                message.channel.send(`Mds, quase certeza <a:CoraColorido:831897712193830982>`);
            }
            if (shipValor > 50) {
                
            if (shipValor < 70) {
                message.channel.send(`Será que vai dar certo? Parece que sim <a:CoraColorido:831897712193830982>`);
            }
        }
    }

    if (shipValor === 70) {
        message.channel.send(`Mds, quase certeza <a:CoraColorido:831897712193830982>`);
    }

    if (shipValor < 50) {
        message.channel.send(`Acho que vai rolar não...`)
    }

    if (shipValor === 50) {
        message.channel.send(`Não sei não em`)
    }


 message.delete();
}
  
  module.exports.help = {
      name: "ship"
  }