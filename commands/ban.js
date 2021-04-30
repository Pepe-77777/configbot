const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Bruh, você não tem permissão!')
if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Eu não tenho a permissão para banir, contacte algum moderador!')

message.delete()

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!args[0]) return message.channel.send('Por favor, mencione alguem!');

if(!member) return message.channel.send('Não foi possivel encontrar este usuário, desculpe!');
if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

if(member.id === message.author.id) return message.channel.send('Bruh, você não pode banir você mesmo');

let reason = args.slice(1).join(" ");

if(!reason) reason = 'Não está especificado';

member.ban(`${reason}`).catch(err => { 
  message.reply(`Algum erro occoreu`)
})

const banembed = new Discord.MessageEmbed()
.setTitle('Membro banido')
.setThumbnail(member.user.displayAvatarURL())
.addField('Usuário banido:', member)
.addField('Banido pelo', message.author)
.addField('Rasão', reason)
.setFooter(`Executado por <@${message.author.id}>`)
.setTimestamp()

message.channel.send(banembed);
}

module.exports.help = {
  name: "ban"
}