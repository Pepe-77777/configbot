const Discord = require("discord.js"); 

module.exports.help = {
    name:"flip"
  }

let resposta = [
    `š`,
    `š`
]

exports.run = async (client, message, args) => {
    message.channel.send(`**š = cara\nš = coroa**`); return message.react(`${resposta[Math.floor(Math.random() * resposta.length)]}`)
}
