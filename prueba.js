console.log('Hello');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('Aloh');
}

client.login('ODc3Mjc0MTA2MjU1NTExNjEz.YRwPLQ.qAB1GHZIdNNfqKUgB17HvKILyLE');
