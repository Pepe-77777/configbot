const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()

module.exports.help = {
    name:"ram"
  }

module.exports.run = async (bot, message, args) => {
message.delete();
  var os = require('os');

  var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
  
  var  getpercentage = 
    ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
  
  message.channel.send(`Quanto o bot esta usando: ${(usedMemory/ Math.pow(1024, 3)).toFixed(2)}%`)
  message.channel.send(`Memoria sendo usada do pc do Pepê: ${getpercentage}`);
}
