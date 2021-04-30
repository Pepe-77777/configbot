const Discord = require("discord.js"); 

module.exports.help = {
    name:"ping"
  }
  exports.run = async (client, message, args) => {
    message.delete();
    message.channel.send('Carregando...').then (async (msg) =>{
      msg.delete()
      let ping = `${msg.createdTimestamp - message.createdTimestamp}`
      let apiping = `${Math.round(client.ws.ping)}`

      if (ping < 100) {
        message.channel.send(`🟩 A latencia é de: ${ping}ms.`);
      } 

      if (ping === 100) {
        message.channel.send(`🟨 A latencia é de: ${ping}ms.`);
      }

      if (ping > 100 & ping < 300) {
        message.channel.send(`🟨 A latencia é de: ${ping}ms.`);
      } 

      if (ping > 300) {
        message.channel.send(`🟥 A latencia é de: ${ping}ms.`);
      } 

      if (ping === 300) {
        message.channel.send(`🟥 A latencia é de: ${ping}ms.`);
      } 

      if (apiping < 100) {
        message.channel.send(`🟩 A latencia de api é de: ${apiping}ms.`);
      } 

      if (apiping === 100) {
        message.channel.send(`🟨 A latencia de api é de: ${apiping}ms.`);
      }

      if (apiping > 100 & apiping < 300) {
        message.channel.send(`🟨 A latencia de api é de: ${apiping}ms.`);
      } 

      if (apiping > 300) {
        message.channel.send(`🟥 A latencia de api é de: ${apiping}ms.`);
      } 

      if (apiping === 300) {
        message.channel.send(`🟥 A latencia de api é de: ${apiping}ms.`);
      } 
      
      message.reply(`O bot está apresentando pings altos constantes? veja o status dele em https://discord.gg/Ftpwjnv2Jh ou reporte em https://discord.gg/YQWCHMa8`)
      
    })
  }