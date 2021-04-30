const Discord = require("discord.js"); 

module.exports.help = {
    name:"sugestão"
  }

exports.run = async (client, message, args) => {
message.delete();
 let message1 = message.content.toLowerCase();
        message2 = message1.replace('pepe!sugestão ', '');
        message.channel.send('Sugestão ' + `**${message2}**`+ ' foi enviada com sucesso! verifique <#827635163101921342> para votar!')
        client.channels.cache.get('827635163101921342').send('Sugestão: ' + `**${message2}**` + ` ||*Sugestão enviada por* *${message.author}*||`)
            .then(function (message) {
                message.react('✅');
                message.react('❌');
            })
    
        }
