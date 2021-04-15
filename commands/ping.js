const Discord = require("discord.js"); 

module.exports.help = {
    name:"ping"
  }
  exports.run = async (client, message, args) => {
    message.delete();
    message.channel.send('Carregando...').then (async (msg) =>{
      msg.delete()
      message.channel.send(`🏓 A latencia é de: ${msg.createdTimestamp - message.createdTimestamp}ms. A latencia de api é: ${Math.round(client.ws.ping)}ms`);
    })
  }