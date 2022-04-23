///////////////////////////////////

// Youtube:
//https://www.youtube.com/channel/UC4zkPH1ticImcO4-fjM2pZA

///////////////////////////////////

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');



const client = new discord.Client();
const keepAlive = require('./server.js');


const events = fs.readdirSync('./rpc/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./rpc/ready`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.TOKEN);
