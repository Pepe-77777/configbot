const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

    let sendMessage = message.content.substring(11);
    const ideia = `https://vacefron.nl/api/changemymind?text=${sendMessage}`;


    let serverembed = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setImage(`${ideia.replace( /\s/g, "+")}`)
    .addField(`Autor:`, `${message.author.tag}`)
    console.log(`Mude minha ídeia:: ${ideia.replace( /\s/g, "+")}`)

    message.channel.send(serverembed);

}
  
  module.exports.help = {
      name: "ideia"
  }