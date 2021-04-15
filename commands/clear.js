const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGE")) {
        return message.channel.send(`**${message.author}, você não tem permissão de utiliza esse comando, para isso você deve ``Gerenciar Mensagens`` para usa o comando`)
      }
      const deleteCount = parseInt(args[0], 10);
      if (!deleteCount || deleteCount < 1 || deleteCount > 100)
        return message.reply(
          "**descreva um número de até 99 mensagens para serem excluidas**"
        );
    
      const fetched = await message.channel.messages.fetch({
        limit: deleteCount + 1
      });
      message.channel.bulkDelete(fetched);
      message.channel
        .send(`**Foram Limpadas ${args[0]} mensagens nesse chat.**`).then(msg => msg.delete({timeout: 5000}))
        .catch(error =>
          message.channel.send(`**Não foi possível deletar mensagens devido a: ${error}**`)
        );
    };
module.exports.help = {
    name:"clear"
  }