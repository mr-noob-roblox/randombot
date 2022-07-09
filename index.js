const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');

    const guildid = "982961183713820702"
    const guild = client.guilds.cache.get(guildid)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'test',
        description: 'test message'
    })

    commands?.create({
        name: 'njirsefekcoek',
        description: "lol"
    })
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    const { commandName } = interaction

    if (commandName === "test") {
        interaction.reply({ content: "ok" })
    } else if (commandName === "njirsefekcoek") {
        interaction.reply({ content: "https://cdn.discordapp.com/attachments/982961184317796386/995156413691211876/Snip-it_1657290391702.jpg" })
    }
});

client.login(token);