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
client.on('message', message => {
    if (message.content === "+createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Master", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Minister", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});
client.on("message", message => {
 if (message.content === "امر البوت الي تبيه") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

***__وصف عن البوت__***
**
وصف عن بوتك هنا

**

        ***__General orders__***
**
『f!id / معلومات عن حسابك』
『f!draw / يكرر كلامك في صوره』
『f!embed / يكرر كلامك بمبيد』
『f!roles / يعرض لك الرتب و عددها』
『f!rooms / يعرض لك الرومات وعددها』
『f!server / معلومات عن السيرفر』
『f!animal / يعطيك صور حيوانات』
『f!image / يعرض صوره السيرفر』
『f!avatar / يعرض صورتك او صوره شخص』
『f!time / يعرض لك الوقت』
『f!date / يعرض لك التاريخ』
『f!dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
**

        ***__Bot orders__***
**
『f!ping / يعرض لك سرعه اتصال البوت』
『f!uptime / يعرض لك صار للبوت كم شغال』
『f!support / سيرفر الدعم القني و المساعده』
『f!invite / اضافه البوت』
『f!members / حاله الاعضاء』
『f!bot / معلومات عن البوت』
**

        ***__Administrative Orders__***
**
『f!kick / كيك』
『f!ban / بان』
『f!mute /ميوت』
『f!unmute /فك الميوت』
『f!mutechannel /قفل الشات』
『f!unmutechannel /فتح الشات』
『f!add.r / اضافه رتبه』
『f!delet / مسح روم』
『f!color 50 /انشاء 50 لون』
『f!color 100/انشاء 100 لون』
『f!color 140/انشاء 140 لوم』
『f!ct /انشاء روم كتابي』4
『f!cv /انشاء روم صوتي』
『f!bc /برودكاست』
**


        ***__Games orders__***
 **       
『f!لعبه صراحه / صراحه』
『f!لعبه مريم / مريم』
『f!لعبه خواطر / خواطر』
『f!يعطيك شعر عن الحب / حب』
『f!يخيرك بين شي وشي / لو خيروك』
『f!يعطيك عقاب و لازم تنفذه / عقاب』
『f!لعبه اسئله / كت تويت』
**
   
        
`)


message.author.sendEmbed(embed)

}
}); 
client.login(process.env.BOT_TOKEN);
