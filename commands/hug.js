const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();

  if (!message.mentions.users.size) {
    message.reply('Ninguém foi mencionado!');
    return;
}

var abracos = [
    "https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134",
    "https://tenor.com/view/hug-boo-mosters-inc-james-gif-7495111",
    "https://giphy.com/gifs/editingandlayout-the-office-hug-michael-scott-yidUzriaAGJbsxt58k",
    "https://giphy.com/gifs/chicagomed-season-4-episode-12-chicago-med-1dOH0aFZz3LyVVEMn9",
    "https://giphy.com/gifs/hug-love-winnie-the-pooh-llmZp6fCVb4ju"
];


  const user = message.mentions.users.first() || message.author;

    message.channel.send(`**${message.author} Abraçou ${user}**`)


    message.channel.send(`${abracos[Math.floor(Math.random() * abracos.length)]}`)
    message.channel.send(`Abraços!!!`)

}
  
  module.exports.help = {
      name: "hug"
  }