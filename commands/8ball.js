const Discord = module.require('discord.js');

var fortunes = [
    "sim",
    "não",
    "talvez",
    "não sei",
    "melhor não responder",
    "Provavelmente Sim",
    "Nem perto",
    "Provavelmente Não",
    "Definitivamente não",
    "Definitivamente sim"
];


module.exports.run = async (bot, message, args) => {

    let sendMessage = message.content.substring(11);

    message.delete();
    
if(!args[0]){
  return message.channel.send(":x: " + "| Por favor escreva alguma coisa para eu responder!")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":x: " + "| I Wasnt Able To Read That :(");

message.channel.send(`||**_Pergunta:_** ${sendMessage}||`);
}

module.exports.help = {
    name: "8ball"
}