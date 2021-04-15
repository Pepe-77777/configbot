const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var dado = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];


    message.channel.send(`**${message.author} Girou um dado e caiu em ${dado[Math.floor(Math.random() * dado.length)]}**`)

 message.delete();
}
  
  module.exports.help = {
      name: "dado"
  }