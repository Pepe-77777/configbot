const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    return message.channel
      .send(
        "Você não tem a permissão `manage_messages`",
      );
  }

  if (isNaN(input)) {
    return message.channel
      .send('Dígite o número de mensagens para deletar!')
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 2500);
      });
  }

  if (Number(input) < 0) {
    return message.channel
      .send('Não é possivel excluir mensagens que são 0 ou menos!')
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 2500);
      });
  }

  // add an extra to delete the current message too
  const amount = Number(input) > 100
    ? 101
    : Number(input) + 1;

  message.channel.bulkDelete(amount, true)
  .then((_message) => {
    message.channel
      // do you want to include the current message here?
      // if not it should be ${_message.size - 1}
      .send(`Bot cleared \`${_message.size}\` messages :broom:`)
      .then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 2500);
      });
  });
};

module.exports.help = {
    name:"clear"
  }