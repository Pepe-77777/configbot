const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json");


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`$help para saber os comandos! | estamos em ${client.guilds.cache.size} servidores!`, { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
  client.user.setActivity(`$help para saber os comandos! | estamos em ${client.guilds.cache.size} servidores!`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
  client.user.setActivity(`$help para saber os comandos! | estamos em ${client.guilds.cache.size} servidores!`);
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }

  if(comando === "help") {
    message.reply('**Acesse https://sites.google.com/view/pepebot-suporte/comandos para saber os comandos**')
  }

  if(comando === "memarca") {
    message.reply('Pronto!');
  }

  if(comando === "botinfo") {
    message.channel.send('**<:js:817102898579374160> Programado: JavaScript**');
    message.channel.send('**<:dev:817101482263707700> Biblioteca: Discord.js**');
    message.channel.send('**<a:verificado:817101452119506985> Criado por Pepê**');
    message.channel.send(`**<:nitro:821599274542170113> estou em ${client.guilds.cache.size} servidores!**`)
  }

  if(comando === "site") {
    message.reply('**Acesse o nosso site! https://sites.google.com/view/pepebot-suporte**');
  }

  if(comando === "sugestao") {
    message.reply('**Para mandar uma sugestão acesse https://sites.google.com/view/pepebot-suporte/sugestao ou entre no nosso discord: https://discord.gg/Zs6WkyJpBt**')
  }

  if(comando === "invite") {
    message.reply('https://discordapp.com/oauth2/authorize?=&client_id=816515410441535518&scope=bot&permissions=8');
  }

  if(comando === "discord") {
    message.reply("**Acesse o nosso discord: https://discord.gg/Zs6WkyJpBt**");
  }

    if (comando === "say") {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Você não tem a permissão `MANAGE_MESSAGES`')
        let sendMessage = message.content.substring(4);

        message.channel.send(sendMessage);

      }

    if(comando === "ban") {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Você não tem a permissão `BAN_MEMBERS`'); {
        message.reply('Comando sendo feito!');
            }
    }

    if(comando === "kick") {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('Você não tem a permissão `KICK_MEMBERS`'); {
        message.reply('Comando sendo feito!');
            }
    }

    if(comando === "@PepeBOT#9405") {
      message.reply(`oi`);
    }
});
client.login(config.token);
