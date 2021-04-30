const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    
var token125 = [
    "Shhh...",
    "Vai pega não <a:ademironlaine:818996853039300659>",
    "Safado...",
    "<a:ademironlaine:818996853039300659>",
    "Talvez?",
    "Ta querendo pegar meu token porque? safado",
    "Shhh...",
    "Vai pega não <a:ademironlaine:818996853039300659>",
    "Safado...",
    "<a:ademironlaine:818996853039300659>",
    "Talvez?",
    "Ta querendo pegar meu token porque? safado"
];

    message.reply(`${token125[Math.floor(Math.random() * token125.length)]}`)
}
  
  module.exports.help = {
      name: "token"
  }