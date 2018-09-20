// you can tell that im really cool because i write all my code in one single file

const Discord = require('discord.js');
const request = require('request');
const apiKey = require('./apikey.js');


var isNum = function(c){
	for(j=0; j<10; j++)
		if(c == j) return true;
	return false;
}


var bot = new Discord.Client();
var PREFIX = '~';

bot.on("ready", function(){
	console.log('CompProgBot is ready for use!'); // log to console
	bot.user.setPresence({ 
		game: { // set game
			name: PREFIX + 'help',
			type: 0
		}
	});
});

bot.on('message', function(message){

	if(message.author.bot) return; // ignore bot messages

	if(message.isMentioned(bot.user)){
		message.channel.send("Please use the prefix '" + PREFIX + "' to use commands. Ex: ~help");
		return;
	}

	if(!message.content.startsWith(PREFIX)) return; // ignore messages without prefix

	console.log("Received " + message.author.username + "'s command: " + message.content.substring(0,40)); // log to console

	var args = message.content.substring(PREFIX.length).split(" ");
	switch(args[0].toLowerCase()){ // not case sensitive

		//===== BOT INFO =====

		case 'help':
		case 'about':
			message.channel.send(
				"Beep boop I'm a bot\n" + 
				"My commands start with the prefix '" + PREFIX + "'\n" +
				'For commands, type "' + PREFIX + 'commands"\n' +
				"My source code is available at https://github.com/wj3ng/CompProgBot"
			);
			return;

		case 'commands':
			message.channel.send(
				"For a complete list of commands, please go to https://github.com/wj3ng/CompProgBot#commands"
			);
			return;

		case 'bug':
			message.channel.send(
				"To report a bug, please go to https://github.com/wj3ng/CompProgBot/issues"
			);
			return;

		//===== ONLINE JUDGES =====

		case 'uva':
			
			let uvaValID = true;
			if(args[1].length > 5) uvaValID = false;
			for(i=0; i<args[1].length; ++i)
				if(!isNum(args[1].charAt(i))) uvaValID = false;

			if(!args[1]) message.channel.send('Please state a problem number. Ex: "~uva 00100"');
			else if(!uvaValID) message.channel.send('Invalid format. Ex: "~uva 00100"');
			else{
				request("https://uhunt.onlinejudge.org/api/p/num/"+args[1], {json: true}, function(err, resp, body){
					if(body.num == undefined) message.channel.send("Problem does not exist.");
					else{
						var uvaEmbed = new Discord.RichEmbed()
							.addField("UVa " + body.num + ": " + body.title,
								"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=" + body.pid +
								"\n" + body.dacu + " users accepted.")
							.setFooter("AC " + body.ac + ", WA " + body.wa + ", TLE " + body.tle + ", MLE " + body.mle + ", RE " + body.re + ", PE " + body.pe + ", CE " + body.ce)
							.setColor(0xA50E57)
							message.channel.send(uvaEmbed);
					}
				});
			}
			return;

		case 'cf':
		case 'codeforces':
			return;

		//===== MISC =====



	}


});

// start the bot
bot.login(apiKey.TOKEN);