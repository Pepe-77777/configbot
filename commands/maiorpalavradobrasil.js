const Discord = require("discord.js"); 

module.exports.help = {
    name:"maiorpalavradobrasil"
  }

exports.run = async (client, message, args) => {
    message.delete();
    message.reply(`A maior palavra do brasil é: pneumoultramicroscopicossilicovulcanoconiótico`)
}
