const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client;
let prefix = config.prefix;
let players = 1; 
bot.commands = new Discord.Collection();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync('banco.json');
const db = low(adapter)

var os = require('os');
const { brotliCompressSync } = require("zlib");
const { send } = require("process");

var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

var  getpercentage = 
  ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Não tem comandos para serem carregados.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Carregado!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
  bot.user.setActivity(`digite pepe!help para ver os comandos! | Estamos em ${bot.guilds.cache.size} servidores!`, {type: "PLAYING"});
});

bot.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
  bot.user.setActivity(`digite pepe!help para ver os comandos! | Estamos em ${bot.guilds.cache.size} servidores!`, {type: "PLAYING"});
});
  bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
  
    bot.user.setActivity(`digite pepe!help para ver os comandos! | Estamos em ${bot.guilds.cache.size} servidores!`, {type: "PLAYING"});
  });

//Command Manager

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  //Check for prefix
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});
bot.on("message", async message => {

  let guildid = `${message.guild.id}`;
  let guildname = `${message.guild.name}`
  let guildemojis = `${message.guild.emojis.cache.size}`

  if (message.author.bot) return;

  let msg = message.content.toLowerCase();

  let resp = new Discord.MessageEmbed() 
  .setColor("#6400b6")
  .setTitle(`PepeBOT HELP`)
  .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
  .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}?size=4096`)
  .addField(`Oi, Meu nome é PepeBOT`, `Meu prefixo é` + "```pepe!```" + " para ver meu comandos, digite ```pepe!help```" + "estou usando " + "```"+`${(usedMemory/ Math.pow(1024, 3)).toFixed(2)}`+"%" + "```" + " de ram!" + "```" + `${players} pessoas` + "```" + "viram está pagina des da ultima vez que o bot reiniciou!")

  if (msg == '<@!816515410441535518>' || msg == '<@816515410441535518>'){
      players = players + 1;
      message.delete();
      message.channel.send(resp)
  }

  if (msg === `${prefix}ping-info`) {
    message.delete();
    message.channel.send("```" + `Status | CONSOLE | Website | Uptime | Guilds |\n| BOT ON | ON | Não feito | 0h 0d 0s | ${bot.guilds.cache.size} |` + "```")
  }

  if (msg === `${prefix}guildid`) {
    message.delete();
    message.channel.send("```" + `${guildid}` + "```")
  }

  if (msg === `${prefix}inf-server`) {
    message.delete();
    message.channel.send("```" + `ID: ${guildid} \nNome: ${guildname}\nNumero de emojis: ${guildemojis}\nEmojis: ${message.guild.emojis.holds.apply.call()}` + "```")
  }

  if(msg === `${prefix}criar`) {
    db.set(`${message.guild.id}`, []).write()
    db.get(`${message.guild.id}`).push({
      id: `${message.author.id}`,
      nick: `${message.author.username}`,
      avatar: `${message.author.displayAvatarURL()}`
    }).write()
    message.delete();
    message.channel.send('Perfil criado com sucesso!')

  }

  if (msg === `${prefix}editar`){
    if(!args[0])return message.channel.send('Você esqeceu do argumento ')
    let [novonome] = args
    db.get(message.guild.id)
    .find({id: message.author.id}).assign({nick: novonome}).write()
    message.channel.send('Perfil editado com sucesso!')
 }
  if (msg === `${prefix}apagar`){
    db.get(message.guild.id).remove({id: message.author.id}).write()
  }

  let informacoes = db.get(message.guild.id).find({id: message.author.id}).value();

  if (msg === `${prefix}perfil`) {
    message.channel.send(`Oque sabemos sobre você!\nID do usuário:`) 
  } 
});

//Token need in token.json
bot.login(config.token);