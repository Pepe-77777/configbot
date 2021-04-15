const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.mentions.users.size) {
    message.delete();
    message.reply('Ninguém foi mencionado!');
    return;
}

var beijo = [
    "https://tenor.com/view/milk-and-mocha-bear-couple-kisses-kiss-love-gif-12498627",
    "https://tenor.com/view/love-you-lots-kiss-peachcat-gif-13985240",
    "https://tenor.com/view/milk-and-mocha-kiss-love-in-love-gif-11453877",
    "https://tenor.com/view/milk-and-mocha-kisses-hugs-gif-12752386",
    "https://tenor.com/view/bear-kisses-for-you-blow-kiss-love-gif-12752371",
    "https://loritta.website/assets/img/actions/kiss/female_x_female/gif_351.gif"
];


  const user = message.mentions.users.first() || message.author;

    message.channel.send(`**${message.author} Beijou ${user}**`)


    message.channel.send(`${beijo[Math.floor(Math.random() * beijo.length)]}`)
    message.channel.send(`Beijos!!!`)

 message.delete();
}
  
  module.exports.help = {
      name: "kiss"
  }