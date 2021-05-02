const Discord = require("discord.js"); 

module.exports.help = {
    name:"flip"
  }

let resposta = [
    `😀`,
    `👑`
]

exports.run = async (client, message, args) => {
    message.channel.send(`**😀 = cara\n👑 = coroa**`); return message.react(`${resposta[Math.floor(Math.random() * resposta.length)]}`)
}
