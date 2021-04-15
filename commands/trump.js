const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sendMessage = message.content.substring(11);
    const trump = `https://api.no-api-key.com/api/v2/trump?message=${sendMessage}`;


    let serverembed = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setImage(`${trump.replace( /\s/g, "+")}`)
    .addField(`Autor:`, `${message.author.tag}`)
    console.log(`Trump: ${trump.replace( /\s/g, "+")}`)

    message.channel.send(serverembed);

message.delete()
}
  
  module.exports.help = {
      name: "trump"
  }