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
 '* من تحب اكثر امك او ابك*', 
'* من تحب اكثر الوجبات سريعة ولا وبجات في بيت *', 
'من تحب اكثر اخيك ولا اختك.',
 ' متحب اكثر النوم ولا  السهر.', 
'من تحب اكثر هاتف فقدانت تمتلكه في عالم اوتلفاز ضخم. ' , 
'من تحب اكثر ميدنتك او اليابان',
 ' من تحب اكثر ابيك يضربك كف قوي ولا شخص غريب يضربك كف قوي.', 
'من تحب اكثر جدك او نانتك. ', 
'من تحب اكثر كرة سلة او كرة قدم ',
 'من تحب اكثر تشحن هاتفك كل ثلاث ايام ولا' ,  'بدون انترنت لمدة ثلاث ايام.', ' من تحب اكثر تبرمج العاب ولا تبرمج مواقع', 
' من تحب اكثر تشتهر بواسطة سوشيال ميديا ولا تشتهر بفضل لعبة البولينغ.*',
 ' من تحب اكثر تكون ممثل وانت بطل قصة وفلوس قليلة ولا تكون الشخصية شريرة بس فلوس كثيرة.',
 '*من تحب اكثر كريستيانو ولا ميسي. *',
 '*من تحب اكثر النوم او تشتغل في الليل والنهار وتربح كثير فلوس.*', 
'* من تحب اكثر يكون عندك اصدقاء في طفولى وماعندك اصدقاء لمه تكبر او العكس. *', 
'*  من تحب اكثر تولد بدون يكون عندك فقد يد وحدة ولا تولد عندك رجل وحدة فقد.*', 
'*من تحب اكثر يكون عمبرك قليل والكل يحبك او عمرك طويل جدا والكل يكرهك. *', 
'*من تحب اكثر تعيش في اسوأ مكان في عالم وامك موجودة معك ولا تعيش افضل بلد معك بس امك ميتة. *' 
] 
client.on('message', message => {
 var prefix = 'sr!'; 
if (message.content.startsWith(prefix + 'من تحب اكثر')){ 
var mariam= new Discord.RichEmbed() 
.setTitle("لعبة من تحب اكثر ..")
 .setColor('RANDOM') 
.channel.sendEmbed(mariam); message.react("🤔")
 }
 });
client.login(process.env.BOT_TOKEN);
