const Discord = require("discord.js"); 

module.exports.help = {
    name:"servericon"
  }

exports.run = async (client, message, args) => {
  message.delete();
  
    let serverembed = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setTitle(`Server Icon`)
    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    .setImage(`${message.guild.iconURL({dynamic: true})}?size=4096`)

    message.channel.send(serverembed);

 }