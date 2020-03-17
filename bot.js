const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg5Mjc3NjExODgwMzQ5NzA2.XnAh1Q.MWeW_KkZVERBUI470dJ4hiAPB8M';

const PREFIX = '!'; // This prefix will be used to manage server. 
var version = 'Version 1.0.0';
var owner = 'LKG_Flash';
var created = '8/2/2020 3:02pm'

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" "); 

        if (message.content === '!LKG info') {
            const embed = new MessageEmbed()
            .setTitle('~ Lightning Kings Bot Info ~')
            .setAuthor('Corey Bryan', 'https://pbs.twimg.com/profile_images/1226405600701140992/UdS1whEf_400x400.jpg', 'https://twitter.com/_LKGaming_')
            .addField('Version', version, true) // Gets Bot Version
            .addField('Server Owner', owner, true)
            .addField('Server Created', created, true)
            .addField('Current Server', message.guild.name, true) // Gets server name
            .addField("Problems/Issues", "If there is a problem with the bot be sure to message us on twitter telling us what the problem is. Also if there is any suggestions that you want to share to make the bot better dont hesitate to let us know! [Follow us on Twitter!](https://twitter.com/_LKGaming_)")
            //.addField("Its mine now", "Add DiscordBot to your server! [Click here](https://discordapp.com/oauth2/authorize?client_id=439778986050977792&scope=bot&permissions=8)")
            .setThumbnail('https://pbs.twimg.com/profile_images/1226405600701140992/UdS1whEf_400x400.jpg')
            .setColor(0xffdf00)
            .setDescription('This is the Lightning Kings Bot which was made by Lightning Kings Tech. This bot is still in development.')
            .setTimestamp()
	        .setFooter('Lightning Kings Tech', 'https://pbs.twimg.com/profile_images/1226405600701140992/UdS1whEf_400x400.jpg');
            message.channel.send(embed);
        }

    switch(args[0]){ 
        case 'Lock':
            message.channel.send('Hey Corey')
            break;
        case 'Unlock':
            message.channel.send('Hey Corey')
            break; 
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version 1.0.0');
            }else{
                message.channel.send('Invalis ARGS!')
            }       
    }
})

bot.login(proccess.env.BOT_TOKEN);
