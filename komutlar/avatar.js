const Discord = require("discord.js");
const client = new Discord.Client();

const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NTY4MzEwMjI2OTUwNTU0NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMDg1ODAxfQ.mcsdvCEWkn3ra9yqzyGg4VThVGbY1uf2Ztyqs-FrQW4', client); // TOKENİ TOP.GG SİTESİNDEN API > MY BOTS > BOTU SEÇİP ordan alabilirsiniz

exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.channel.send(`**Avatar Komutunu Kullanmak İçin Botumuza Oy Vermelisin** https://top.gg/bot/775683102269505546/vote | Eğer Oy Verdiyseniz 3 Dakika Bekleyin**`)

        } else {


            var user = message.mentions.users.first() || message.author;

            const webAttachment = new Discord.MessageAttachment(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`)
            message.channel.send(webAttachment)
        }
    })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'avatar',
    description: 'Avatarınızı gönderir.',
    usage: 'avatar'
};