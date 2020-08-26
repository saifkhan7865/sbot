const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('sbot is online');
});



bot.on('message',message=>{
     let args = message.content.substring(PREFIX.length).split(' ');

     switch(args[0]){

      case "new":
          message.channel.send('welcome to the server friend make sure to introduce yourself!');
          break;
      case "illegal":
          message.channel.send('please stop sharing media in this channel there are other channels for that');
          break;
      case "courses":
          message.channel.send('https://www.udemy.com/user/mohammed-abdul-hameed-khan/');
          break;
      case "bot":
          message.channel.send('(1)- !illegal if someone is doing something illegal\n(2)- !courses for getting the list of all the courses of Mohammed khan');
          break;
      
     }

});
bot.login(process.env.BOT_TOKEN);
