const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on('ready', ()=>{
    var generalChannel = client.channels.cache.get("877271004999733269")
    generalChannel.send("Hello")
});

client.on('message', message =>{
    if (message.content === '!scrapbot'){
        message.channel.send('Hello');
    }
});

client.login(config.BOT_TOKEN)