const Discord = require("discord.js"); 
const mojangjs = require("mojangjs");
const moment = require('moment');

module.exports.help = {
    name:"namemcuser"
  }

exports.run = async (client, message, args) => {
    const isValidNickname = string => NICKNAME_REGEX.test(string);
    const NICKNAME_REGEX = /^[a-zA-Z0-9_]{3,16}$/;

    function joinNames(playerNameHistory) {
       let allNames = '';
       for (let i = 0; i < playerNameHistory.length; i++) {
          if (i + 1 !== playerNameHistory.length) {
             allNames += playerNameHistory[i].name + ', ';
          } else {
             allNames += playerNameHistory[i].name;
          }
       }
       return allNames;
    }

    if (args.length > 1 || !isValidNickname(args[0])) {
       message.channel.send('Por favor insira um nome de usuário inválido.');
       return;
    }

    if (args.length == 0) {
       message.channel.send("Por favor insira um nome de usuário.");
       return;
    }

    // MojangJS NPM package is used.
    mojangjs
       .getUUID(args[0])
       .then(uuid => {
          mojangjs.nameHistory
             .byUUID(uuid)
             .then(namehistory => {
                const playerHistory = new Discord.MessageEmbed()
                   .setTitle(`**Historico de nome de ${args[0]}**`)
                   .setThumbnail('https://visage.surgeplay.com/face/' + uuid)
                   .setURL(`https://namemc.com/${args[0]}`)
                   .setColor('#dee8eb');

                playerHistory.addField(
                   `${args[0]} Mudou ${namehistory.length} vezes os nicks.`,
                   `**${args[0]}'s** Nomes: ${joinNames(namehistory)}`
                );

                return message.channel.send(playerHistory);
             })
             .catch(console.error);
       })
       .catch(err => {
          message.channel.send("Um erro ocorreu ao pegar o nick.");
          console.error(err);
       });
       message.delete();
}