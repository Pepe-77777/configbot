const Discord = require("discord.js"); 

module.exports.help = {
    name:"invite"
  }
  exports.run = async (client, message, args) => {
    message.delete();
    message.reply('https://discord.com/api/oauth2/authorize?client_id=816515410441535518&permissions=8&redirect_uri=https%3A%2F%2Fsites.google.com%2Fview%2Fpepebot-suporte&response_type=code&scope=bot%20guilds%20applications.commands');
  }