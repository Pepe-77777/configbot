const Discord = require("discord.js"); 

module.exports.help = {
    name:"invite"
  }
  exports.run = async (client, message, args) => {
    message.reply('https://discord.com/oauth2/authorize?client_id=816515410441535518&permissions=8&scope=bot');
  }