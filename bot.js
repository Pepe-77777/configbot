const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
  bot.user.setActivity(`digite pp!help para ver os comandos! | Estamos em ${bot.guilds.cache.size} servidores!`, {type: "PLAYING"});
});

bot.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
  bot.user.setActivity(`digite pp!help para ver os comandos! | Estamos em ${bot.guilds.cache.size} servidores!`, {type: "PLAYING"});
});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

  bot.user.setActivity(`digite pp!help para ver os comandos! | Estamos em ${bot.guilds.cache.size} servidores!`, {type: "PLAYING"});
});

//Command Manager
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  //Check for prefix
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.on("message", message =>{
  if (message.author.bot) return;

  let msg = message.content.toLowerCase();

  let resp = `**Oi! Meu prefixo é 'pp!' Use pp!help para ver os comandos!**`;

  if (msg == '<@!816515410441535518>' || msg == '<@816515410441535518>'){
      message.channel.send(resp)
  }
});


//Token need in token.json
bot.login(config.token);