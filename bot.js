const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>'
const ms = require("ms");
const ownerID = '391665977949028363'


client.on("ready", async () => {
    console.log(`${client.user.username} is now online...`);
    client.user.setActivity(`${prefix}help ${prefix}invite ${client.guilds.size}`, "http://twitch.tv/S-F")
});



//bcall
client.on('message' , function(msg) {
	let args = msg.content.split(" ").slice(1).join(' ')
	let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
                .setTimestamp()
        .setDescription(`${args}`);
if(!msg.author.id === '391665977949028363') return message.channel.send('Sorry, but only bot owner can use that.')
if(msg.content.startsWith(prefix + 'BCall')) {
client.users.forEach( u => {
u.send(embed);
})
msg.channel.send('**Done**');
}
});


//report

client.on('message', function(msg) {
    if(msg.content.startsWith(prefix + 'report')) {
    let messagearray = msg.content.split(" ");
    let cmd = messagearray[0];
    let args = messagearray.slice(1);
    let Ruser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!Ruser) return msg.channel.send("**لم نستطع ايجاد العضو**");
    let Rreason = args.join(" ").slice(22);
    if(!Rreason) return msg.channel.send("**الرجاء كتابة السبب**");
  
    let Rembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**A member has been reported**༻ :heavy_minus_sign: :eight_pointed_black_star:")
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    **${msg.author}** reports **${Ruser}** for **${Rreason}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)
    .setTimestamp()

    let Rchannel = msg.guild.channels.find('name', 'reports');
    if(!Rchannel) return msg.channel.send("Sorry, but i cant find reports channel");

    Rchannel.send(Rembed);

    }
});



//kick
client.on('message', function(msg) {
    if(msg.content.startsWith(prefix + 'kick')) {
      let messagearray = msg.content.split(" ");
      let cmd = messagearray[0];
      let args = messagearray.slice(1);
      let Kuser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
      if(!Kuser) return msg.channel.send("**Sorry, but i didnt find the member**");
      let Kreason = args.join(" ").slice(22);
      if(!Kreason) return msg.channel.send("**Please, can u give us why.**");
      if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("**You dont have permission : KICK_MEMBERS**");
      if(Kuser.hasPermission("ADMINISTRATOR")) return msg.channel.send("Sorry, but you cant kick an administrator");
  
      let Kembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**A member has been kicked**༻ :heavy_minus_sign: :eight_pointed_black_star:")
      .setDescription(`
      ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
      **${msg.author}** kicks ${Kuser} for **${Kreason}**
      ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
      `)
      .setTimestamp()

      msg.guild.member(Kuser).kick(Kreason);

      let Kchannel = msg.guild.channels.find('name', "logs");
      if(!Kchannel) return ;

      Kchannel.send(Kembed);
      msg.channel.send('**The member has been kicked**');
    }
});


//bans
client.on('message', function(msg) {
    if(msg.content.startsWith(prefix + 'ban')) {
      let messagearray = msg.content.split(" ");
      let cmd = messagearray[0];
      let args = messagearray.slice(1);
      let Buser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
      if(!Buser) return msg.channel.send("**Sorry, i cant find the member**");
      let Breason = args.join(" ").slice(22);
      if(!Breason) return msg.channel.send("**Please, can u give us why.**");
      if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("**Sorry, but you dont have permission : BAN_MEMBERS**");
      if(Buser.hasPermission("ADMINISTRATOR")) return msg.channel.send("Sorry, but you cant ban an administrator");
  
      let Bembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**A member has been banned**༻ :heavy_minus_sign: :eight_pointed_black_star:")
      .setDescription(`
      **${msg.author}** bans **${Buser}** for **${Breason}**
      `)
      .setTimestamp()

      msg.guild.member(Buser).ban(Breason);

      let Bchannel = msg.guild.channels.find('name', "logs");
      if(!Bchannel) return;

      Bchannel.send(Bembed);
      msg.channel.send('**The Member Has Been Banned**');
    }
});



//clear
client.on("message", function(msg) {
    let args = msg.content.substring(prefix.length).split(" ");
    if(msg.content.startsWith(prefix + "clear")) {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.replay ('لا تملك صلاحية حدف الرسائل');
    var tfa7;
          tfa7 = parseInt();
        
        msg.channel.fetchMessages({limit: tfa7}).then(messages => msg.channel.bulkDelete(messages)).catch(console.error);
  
    let Cembed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️**Done**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)
    .setFooter(`- Requested By: ${msg.author.username}`)
    msg.channel.sendEmbed(Cembed).then(tfa7 => {tfa7.delete(3000)});
  
}});



//bc
client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**This command is only for stuff team**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('Sorry, but you dont have permisson : **ADMINISTRATOR**' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "PrinceBot";//By Codes , ' ّEpicEdiTeDّ#4968
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**Sorry, But you should type a message**');message.channel.send(`**Are u sure Sending This \nMessage :** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ |   The message has been sended to ${message.guild.members.size} member**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor('RANDOM')
.setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
❤️Server : **${message.guild.name}**

❤️Sender : **${message.author.username}**

❤️Message : **[${args}]**
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●



`)           
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Brodcast cancled :x:.**`).then(m => m.delete(5000));
})
})
}
});
  






//reply code
client.on("message", message => {
    if(message.content === 'ping')
    message.reply('Pong!');
    if(message.content === 'hi')
    message.reply('Ohayo');
    if(message.content === 'hello')
    message.reply('sup');
    if(message.content === 'سلام عليكم')
    message.reply('وعليكم السلام');
});




//botinfo
client.on("message", message => {
    let BotCreated = message.author.createdAt.toString().split(' ');

    let Bembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${client.user.username}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`-Requested By: ${message.author.username}`)
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️BotName : **${client.user.username}**
    
    ❤️BotTag : **${client.user.discriminator}**
    
    ❤️BotOwner : **<@${ownerID}>**

    ❤️Servers : **${client.guilds.size}**node
    
    ❤️BotPing : **${Date.now() - message.createdTimestamp}**
    
    ❤️BotID : **${client.user.id}**
    
    ❤️VoiceChannels : **${message.client.channels.filter(m => m.type === 'voice').size}**
    
    ❤️ChatChannels : **${message.client.channels.filter(m => m.type === 'text').size}**
    
    ❤️Prefix : **${prefix}**
    
    ❤️CreatedAt : **${BotCreated[0]}** **${BotCreated[1]}** **${BotCreated[2]}** **${BotCreated[3]}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)


    if(message.content === prefix + 'bot')
    message.channel.send(Bembed);
});



//user
client.on("message", message => {
    if(message.content.startsWith (prefix + 'user')){
    message.guild.fetchInvites().then(invs => {
    let user = message.mentions.users.first() || message.author
    let personalInvites = invs.filter(i => i.inviter.id === user.id);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    let userCreated = message.author.createdAt.toString().split(' ');
    let JoinedCreated = message.member.joinedAt.toString().split(' ');
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${message.author.username}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`-Requested By: ${message.author.username}`)
    .setTimestamp()
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️UserName : **${message.author.username}**
    
    ❤️UserTag : **${message.author.discriminator}**
    
    ❤️UserID : **${message.author.id}**
    
    ❤️First Join To Discord : **${userCreated[0]}** **${userCreated[1]}** **${userCreated[2]}** **${userCreated[3]}**
    
    ❤️First Join To This Server : **${JoinedCreated[0]}** **${JoinedCreated[1]}** **${JoinedCreated[2]}** **${JoinedCreated[3]}**

    ❤️Invite Count : **${inviteCount}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)

    message.channel.send(embed);
    });
}
});


//tempmute
client.on('message',function(msg) {
    if(msg.content.startsWith(prefix + 'tempmute')) {
      let messagearray = msg.content.split(" ");
  
      let cmd = messagearray[0];
      let args = messagearray.slice(1);
      let Muser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
      if(!Muser) return msg.channel.send("**Sorry, but i cant find the member**")
      if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.reply("**Sorry, but u dont have permission**");
      if(Muser.hasPermission("ADMINISTRATOR")) return msg.channel.send("**Sorry, but i cant mute that member**")
      
      let Membed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**A member has been muted**༻ :heavy_minus_sign: :eight_pointed_black_star:")
      .setDescription(`
      **${msg.author}** give mute role to **${Muser}** in **${msg.createdAt}**
      `)
      .setTimestamp()
  
  
      let muterole = msg.guild.roles.find('name', "mute")
      if(!muterole) return msg.channel.send("**Sorry, but i cant find mute role**")
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole ,{
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    
      let mutetime = args[1];
      if(!mutetime) return msg.channel.send("**Please give a time**");
  
      Muser.addRole(muterole.id);
      msg.channel.send(`<@${Muser.id}> has been muted for  ${ms(ms(mutetime))}`);
  
  
      setTimeout(function() {
        Muser.removeRole(muterole.id)
        msg.channel.send(`<@${Muser.id}> has been unmuted `);
  
        let Mchannel = msg.guild.channels.find('name', "logs")
      if(!Mchannel) return;
      Mchannel.send(Membed);
  
    }, ms(mutetime));
     
}});

  




//server
client.on('message', message => {
    if(message.content.startsWith (prefix  + 'server')) { 
    let embed = new Discord.RichEmbed()  
    .setColor('RANDOM')  
    .setThumbnail(client.user.avatarURL)  
    .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺**${message.guild.name}**༻ :heavy_minus_sign: :eight_pointed_black_star:`) 
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️Server Name : **${message.guild.name}**

    ❤️Server ID : **${message.guild.id}**

    ❤️Server Owner : **${message.guild.owner}**

    ❤️Server OwnerID : **${message.guild.ownerID}**

    ❤️Server Host : **${message.guild.region}**

    ❤️TotalMembers : **${message.guild.memberCount}**
    
    ❤️MemberCount : **${message.guild.members.filter(m => !m.user.bot).size}**
    
    ❤️BotCount : **${message.guild.members.filter(m => m.user.bot).size}**
    
    ❤️RolesCount : **${message.guild.roles.size}**

    ❤️ChatChannels : **${message.guild.channels.filter(m => m.type === 'text').size}**

    ❤️VoiceChannels : **${message.guild.channels.filter(m => m.type === 'voice').size}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)
    .setFooter(`- Requested By: ${message.author.username}`)

    message.channel.send(embed);
    }
});



//help

client.on('message', function(msg) { 
    if (msg.author.bot) return;
     if (msg.content.startsWith (prefix + 'admin')) {
  let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
           .setThumbnail(client.user.avatarURL)
                 .setFooter(`- Requested By: ${msg.author.username}`)
    .setDescription(` 
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️ **${prefix}bc** : To do broadcast
    
    ❤️ **${prefix}kick** : To kick a member
    
    ❤️ **${prefix}ban** : To ban a member
    
    ❤️ **${prefix}vote** : To make a vote
    
    ❤️ **${prefix}clear** : To clear a text room

    ❤️ **${prefix}tempmute** : To tempmute a member
    
    ❤️ **More Soon....**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
.setColor('RANDOM')
msg.channel.send("**See your dm...**")
msg.author.send(embed)
  }
});

client.on('message', function(msg) { 
    if (msg.author.bot) return;
     if (msg.content.startsWith (prefix + 'public')) {
  let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
           .setThumbnail(client.user.avatarURL)
                 .setFooter(`- Requested By: ${msg.author.username}`)
    .setDescription(` 
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️ **${prefix}bot** : To see bot informations
    
    ❤️ **${prefix}server** : To see server informations
    
    ❤️ **${prefix}user** : To see your informations
    
    ❤️ **${prefix}report** : To report a rule breaker
    
    ❤️ **More Soon....**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
.setColor('RANDOM')
msg.channel.send("**See your dm...**")
msg.author.send(embed)
  }
});



client.on('message', function(msg) { 
    if (msg.author.bot) return;
     if (msg.content.startsWith (prefix + 'help')) {
  let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
           .setThumbnail(client.user.avatarURL)
                 .setFooter(`- Requested By: ${msg.author.username}`)
    .setDescription(` 
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️ **${prefix}admin** : To see stuff member commands
    
    ❤️ **${prefix}public** : To see public commands
    
    ❤️ **${prefix}invite** : To invite this bot
    
    ❤️ **${prefix}features** : To see features
    
    ❤️ **More Soon....**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
.setColor('RANDOM')
msg.channel.send(embed)
  }
});


client.on('message', function(msg) { 
    if (msg.author.bot) return;
     if (msg.content.startsWith (prefix + 'features')) {
  let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
           .setThumbnail(client.user.avatarURL)
                 .setFooter(`- Requested By: ${msg.author.username}`)
    .setDescription(` 
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️ **Reply System** : The bot will reply to a certain message
    
    ❤️ **Welcome/Leaving System** : A simple welcome / leaving system in a certain text channel
    
    ❤️ **Welcome in Dm System** : A Simple Welcome in Dm system
    
    ❤️ **AutoRole System** : A simple autorole, when a member join the server will be given a certain role
    
    ❤️ **More Soon....**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
.setColor('RANDOM')
msg.channel.send("**See your dm...**")
msg.author.send(embed)
  }
});








//vote
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'vote')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('this requires the permission: ADMINISTRATOR');
    let messagearray = message.content.split(" ");
    let cmd = messagearray[0];
    let args = messagearray.slice(1);
    if (!args) return message.channel.send(`Proper Usage: ${prefix}vote question`);
    
        const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter('React To Vote.')
    .setDescription(`**${args}**`)
    .setTitle(`Vote Yes Or No`);
    

    let vchannel = message.guild.channels.find('name', '﹄vote﹃')
    if(!vchannel) return message.channel.send('Sorry, I couldnt find the channel')

    let msg = await vchannel.send('@everyone', embed);
    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000});
    };
    
});




//invite
client.on('message', message => {
    if(message.content === prefix + "invite") {
        let embed = new Discord.RichEmbed ()
        .setTitle(`**:arrow_right: Invite **༺${client.user.username}༻**`)
        .setFooter(`${client.user.username}`,`${client.user.avatarURL}`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${client.id}&permissions=8&scope=bot`);

       message.channel.send(embed);
      }
});


//WELCOME/LEAVING
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '﹄welcome﹃')
    if(!channel) return;
    channel.send(member.user + " has joined the server!");
    let role = member.guild.roles.find('name', '- Member')
    member.addRole(role);

    member.send("I Hope u enjoy our server <3")
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '﹄welcome﹃')
    if(!channel) return;
    channel.send(member.user + " has left the server!")
})





client.login(process.env.BOT_TOKEN);
