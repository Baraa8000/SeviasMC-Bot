const Discord = require('discord.js');
const superagent = require("superagent");
const client = new Discord.Client();
const OwnerID = "359011377421090817";

const prefix = "*"
const aprefix = "a*"



client.on("ready", () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as: ${client.user.tag}`);
  console.log('')
  console.log(`Servers: [${client.guilds.size}]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
  client.user.setPresence({ game: { type: 2 , name: `*help | Command`} });

  client.user.setStatus('online')
    
});


client.on('message', message => {
    if(message.content === aprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
          if (message.member.hasPermission("ADMINISTRATOR")) {
              message.delete()
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            client.destroy();
            child_process.fork(__dirname + "bot.js");
            console.log(`تم اعادة تشغيل البوت`);

          }
        }
      
      });

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "join-leave")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("اهلا وسهلا فيك في سيفاس ام سي  ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "join-leave")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("خرج عضو انشالله يكون استمتع ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on('guildCreate', guild => {
	client.channels.get("413652934640009217").send(`**تم اضافة البوت في احد السيرفرات
  اسم السيرفر: __${guild.name}__
  اونر السيرفر: __${guild.owner}__**`)
  }); 


client.on('message', message => {
	    if (message.member.hasPermission("ADMINISTRATOR")) {
       if (message.content === prefix + "bservers") {
       let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField("**:عدد السيرفرات التي فيها البوت**" , client.guilds.size)
    message.channel.sendEmbed(embed);
	   }
      }
  });


  client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var Player = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${Player.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    const verifed = ["359011377421090817"];
  if (message.content.startsWith(prefix + 'ownerbot')) {
      if(!message.channel.guild) return;
  if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**:white_check_mark: انت صاحب البوت :white_check_mark:**")
  } else {
     message.reply("**:x: انت لست صاحب البوت :x:**");   
  }
  }
  });

  client.on('message', message => {
    if (message.content.startsWith("*bans")) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**${bans.size}** ← ** عدد اشخاص المبندين من السيرفر **`))
  .catch(console.error);

  message.delete()
        }
        }
});


  
client.on('message', message => {
            if (message.content.startsWith(prefix + "server")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
//.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' السيرفر 🌐',`✱ SeviasMC Community`)
.addField(' الاعضاء 👥 ',` [${client.users.size}] `)
.addField('الرومات 📚 ',`[${client.channels.size}]`) 
.addField(' البنق 🚀 ',`${Date.now() - message.createdTimestamp}`) 
.addField('المصمم  + صاحب السيرفر ',`@! 𝓑𝓐𝓡𝓐𝓐 - ٽــمۭــنۨ ا̍ﻻ̍ۙڣ#9738`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
  
 client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "*inviteserver"){
message.guild.fetchInvites()
  .then(invites => message.channel.send(`Fetched ${invites.size} invites`))
  .catch(console.error);
}
});


  
client.on('message', message => {

if(message.content == ('a*roles')){
	message.delete()
    if (message.member.hasPermission("ADMINISTRATOR")) {
    var roles = message.guild.roles;
    if(roles){
        for(let i=0;i<roles.size;i++){
        var role = message.guild.roles.array();
        role = role.sort((a,b)=> b.position - a.position).join('\n- ');
        }
    }
 message.channel.send(role);
}
}
});

client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(aprefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(aprefix.length);
	
    let args = message.content.split(" ").slice(1);
    
    if(command == "help") {
	    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete()
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Staff Commands List:")
		.addField("a*help", "Will show this help page")
		.addField("a*say [text]", "Will make bot say anything")
        .addField("a*roles", "Will show server roles")
		message.channel.send({embed})
        }
    }

    
	if (command === "say") {
	    if (message.member.hasPermission("ADMINISTRATOR")) {
		message.delete()
                const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
       }
    }
    
});

client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

   if (command === "cat") {
	   message.delete()
	   const { body } = await superagent
	   .get('aws.random.cat/meow');
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("Mems :cat:")
	   .setImage(body.file)
	   message.channel.send({embed})
   } else

   if (command == "suggest"){
	//if(client.getguild.getchannel == "suggestion") { 
	message.delete()
                const embed = new Discord.RichEmbed()
		.setColor('#7d2dbe')
		.setDescription(":point_down: " + message.author.username + " :point_down: \n\n" + args.join(" "));
		message.channel.send({embed})

//	}
	
   }

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Player Commands List:")
		.addField("*help", "Will show this help page [ Room #bot-commands]")
		.addField("*ping", "WIll show the ping time for the bot [ Room #bot-commands]")
		.addField("*cat", "Will send a random cat image [ Room #mems ]")
        .addField("*server", "Will show you server information [ Room #bot-commands ]")
        .addField("*avatar", "Will show you your avatar")
		message.channel.send({embed})
		
		
	} /*else
	
		if (command === "rules") {
		message.delete()
		message.channel.send(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬ :small_red_triangle:SeviasMC Rules:small_red_triangle_down: ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
@everyone 

▬▬▬
:x: ممنوع السب و الشتم
:x: ممنوع السبام او اللينكات و الصور غير في #pic 
:x: اوامر البوتات كلها في #bots-commands
:x: روابط فيديوهات اليوتيوب او القنوات في #youtubers-zone 
:x: ممنوع طلب اي رولز 
:x:  ممنوع الازعاج
:x: يمنع استخدام برامج تغير الأصوات 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

                                              :sparkles: استمتعوا :sparkles:

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
	} */
	
	
		

});

client.login(process.env.BOT_TOKEN);
