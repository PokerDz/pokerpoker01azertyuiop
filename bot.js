const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`SR Server`,"http://twitch.tv/S-F")
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
client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('sr!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "DgGaming";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })
client.on('message', message => {
if (message.content.startsWith("sr!kick")) {
    var mention = message.mentions.member.first();
    if(!mention) return message.channel.send("u want to ping who u want to kick");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("got kicked : " + mention.tag);
};
});

client.on('message', message => {
    if (message.content === "sr!server") {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();


        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**Server ID | ايـدي الـسيرفر 🆔**", "**" + message.guild.id + "**", true)
            .addField("**Server Owner | اونر السيـرفر 👑** ", "**" + message.guild.owner + "**", true)
            .addField("**Server Location | مـنـطـقـة الـسـيرفـر 🔧**", "**" + message.guild.region + "**", true)
            .addField('**Server Text Channels | رومـات السـيرفر الصـوتـية 🎤**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**Server Voice Channels | رومـات الـسيرفرالكـتابـية 📝**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**Date created | تـاريخ صـناعـه السـيرفـر 📅**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**Roles | الـرتب ✨**", `**[${message.guild.roles.size}]** Role `, true)

        .addField("Members", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
        message.channel.sendEmbed(embed)

    }
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})
client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === "sr!cs") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "Co_Owner",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Leader",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Co_Leader",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Member",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Youtuber",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "Bot",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Helper",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Gaming",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "vip",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === "sr!cs") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
     message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Music', 'voice')
	 message.guild.createChannel('Music', 'voice')
	 message.guild.createChannel('Events', 'voice')
	 message.guild.createChannel('Gaming', 'voice')
	 message.guild.createChannel('welcome', 'text')
	 message.guild.createChannel('info', 'text')
	 message.guild.createChannel('bot', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('Youtube', 'text')
	 message.guild.createChannel('Chat', 'text')
	 message.guild.createChannel('Event', 'text')
	 message.guild.createChannel('Gaming', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر  | نحن غير مسؤولون عن اي عطل يحدث بل سيرفر بسبب تكرار الامر و شكراً**')
}
});




client.on('message', msg => {
  if (msg.content === 'sr!cs') {
    msg.reply('الرجاء التأكد من اعطاء البوت خاصية الـ(MANAGE_CHANNELS و MANAGE_ROLES) ');
  }
});
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='sr!member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);

    });
client.on('message', message => {
    if (message.content.startsWith("sr!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var Hamada = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${Hamada.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
   if (message.content.startsWith("sr!id")) {
                if(!message.channel.guild) return message.reply('**هذا الامر فقط في السيرفرات وشكرا**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("الاسم:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('التاق:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("الايدي:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("تم الانشاء في:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "sr!";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
client.on("message", message => {
    var prefix = "sr!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©zabhm"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 
 const dot = new Discord.Client();
client.on('message', message => {
    
    if (message.content === "sr!emoji") {
        setInterval(function(){
        message.edit('😂') 
        message.edit('🙉')   
        message.edit('🔥')
        message.edit('😠')
        message.edit('🔥 🌶')
        message.edit('🙃')
        message.edit('☠')
        message.edit('✨')
        message.edit('😐')
        message.edit('😍')
        message.edit('❤')
        message.edit('👌:skin-tone-2:')
        message.edit('🌚')
        message.edit('🌹')
        message.edit('😒')
        message.edit('🐸')
        message.edit('🍉')
        message.edit('🚨')
        message.edit('😱')
        message.edit('😡')        
        message.edit('🤑')
        message.edit('😖')
        message.edit('😚')
        message.edit('🕊')
        message.edit('☄')
           message.edit('🐶')
        message.edit('🚜')    
        message.edit('🍫')
        message.edit('👇:skin-tone-2:')
        message.edit('🕹')
        message.edit('🌌 ')
        message.edit('💋 ')
           message.edit('🤸')
        message.edit('🙍:skin-tone-2:')    
        message.edit('😦')
        message.edit('👈:skin-tone-2:')
        message.edit('💓')
        message.edit('☺')
        message.edit('💗')
        message.edit('🌸')


        
        
        }, 1000)
    }
    
})
client.login(process.env.BOT_TOKEN);
