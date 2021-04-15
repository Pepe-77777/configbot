const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
          let mentioned = message.mentions.users.array();
    
          if (args.length == 0) { // Get user's own information
             const created = message.author.createdAt;
             const roles = message.member.roles.cache.map(role => role);
             let gmem = message.member;
    
    
             let nickname = gmem.nickname;
    
             if (nickname == null) {
                nickname = "No nickname set";
             }
    
    
             const embed = new MessageEmbed()
                .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setColor("#bdd9db")
                .addField('Member info:', "**- Display name:** " + nickname + "\n**- Joined NameMC:** " + gmem.joinedAt + "\n**- roles:** " + roles, true)
                .addField('User information:', "**- ID:** " + message.author.id + "\n**- User:** " + message.author.username + "\n**- Tag:** " + message.author.tag + "\n**- Created:** " + created, true)
                .setTimestamp();
    
             message.channel.send(embed);
          } else if (args.length == 1) { // Get mentioned user's info
             if (mentioned.length == 1) {
                const created = mentioned[0].createdAt;
    
                message.guild.members.fetch(mentioned[0].id).then(gmem => {
    
                   const roles = gmem.roles.cache.map(role => role);
    
                   let nickname = gmem.nickname;
    
                   if (nickname == null) {
                      nickname = "Nick não setado";
                   }
    
                   const embed = new MessageEmbed()
                      .setFooter(mentioned[0].username, mentioned[0].displayAvatarURL({ dynamic: true }))
                      .setThumbnail(mentioned[0].displayAvatarURL({ dynamic: true }))
                      .setColor("#bdd9db")
                      .addField('Informação do membro:', "**- Nome:** " + nickname + "\n**- Entrou no server:** " + gmem.joinedAt + "\n**- Cargos:** " + roles, true)
                      .addField('Informação do usuário:', "**- ID:** " + mentioned[0].id + "\n**- Username:** " + mentioned[0].tag + "\n**- Criado:** " + created, true)
                      .setTimestamp();
    
                   message.channel.send(embed);
                });
             } else { // Get user by ID
                message.guild.members.fetch(args[0]).then(gmem => {
                   let gmemuser = gmem.user;
                   const created = gmemuser.createdAt;
                   const roles = gmem.roles.cache.map(role => role);
    
                   let nickname = gmem.nickname;
    
                   if (nickname == null) {
                      nickname = "No nickname set";
                   }
    
                   const embed = new MessageEmbed()
                      .setFooter(gmemuser.username, gmemuser.displayAvatarURL({ dynamic: true }))
                      .setThumbnail(gmemuser.displayAvatarURL())
                      .setColor("#bdd9db")
                      .addField('Member Information:', "**- Display Name:** " + nickname + "\n**- Joined Server:** " + gmem.joinedAt + "\n**- Roles:** " + roles, true)
                      .addField('User Information:', "**- ID:** " + gmemuser.id + "\n**- Username:** " + gmemuser.tag + "\n**- Created On:** " + created, true)
                      .setTimestamp();
    
                   message.channel.send(embed);
                }).catch(err => {
                   message.channel.send("Invalid user ID.");
                });
             }
          } else {
             message.channel.send("Too many arguments!");
          }
       
message.delete();
}
  
  module.exports.help = {
      name: "userinfo"
  }