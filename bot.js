const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
const devs = ['383606619671494659' , '383606619671494659' , '383606619671494659' , ''];
const adminprefix = "#";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
  console.log('By Diamond Codes')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Diamond Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#تقديم | DiamondShop`,"http://twitch.tv/S-F")
client.user.setStatus("online")
 
});

client.on('message', async xkiller => {
 
  if(xkiller.content.startsWith(prefix + "تقديم")) {

    let lang = '';

    let time = '';

    let expe = '';

    let fillter = m => m.author.id === xkiller.author.id

    await xkiller.channel.send("اسمك ؟").then(e => {

      xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })

   .then(co => {

     lang = co.first().content;

      co.first().delete();


     e.edit(`عمرك ؟
[${lang}]`)

xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(col => {

       time = col.first().content;

        col.first().delete();


          e.edit(`ايش راح تبيع ؟
[${time}]
[${lang}]`)

xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })

          .then(coll => {

            expe = coll.first().content;

             coll.first().delete();


             e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)

            let xkilleryt = xkiller.guild.channels.find("name","✽-تقديمات")

            setTimeout(() => {

              e.edit("تم التقديم")

            }, 3000)

            xkilleryt.send(`
» االاسم : **${lang}**
» العمر : **${time}**
» الي راح يبيعه : **${expe}**
تم التقديم بواسطة: ${xkiller.author}
`).then(xkilleryt => {

  xkilleryt.react(":CheckMark:")

  xkilleryt.react(":WrongMark:")

              })

          })

     })

   })

 })

  }

})
 
 
 
   
 
   
client.on('message',async message => {
 
let mention = message.mentions.members.first();
 
let Room = client.channels.get('509960431847211008');
 
if(message.content.startsWith(prefix + "رفض")) {
 
if(message.guild.id !== '496257773529595906') return;
 
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
 
 
if(!mention) return message.reply("منشن شخص");
 
 
 
Room.send(`
**» العضو :** ${mention}
[ :x: ] :: لقد تم رفض العضو`);
 
}
 
});
 
 
   
client.on('message',async message => {
 
let mention = message.mentions.members.first();
 
let Room = client.channels.get('509960431847211008');
 
if(message.content.startsWith(prefix + "قبول")) {
 
if(message.guild.id !== '496257773529595906') return;
 
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
 
 
if(!mention) return message.reply("منشن شخص");
 
 
 
Room.send(`
**» العضو :** ${mention}
[ :white_check_mark: ] :: لقد تم قبول العضو `);
 
}
 
});



client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "• Diamond » Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
}) 

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "✽-welcome");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});

client.login(process.env.BOT_TOKEN);
