const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
    const çalışmasüresi = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const lewixcode = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setFooter('Neanthos Bot  \'İstatistikler', bot.user.avatarURL())
        .addField("» <:sahip:755851433336766475> **Geliştirici** ", "<@660065024731250689>")
        .addField("» <a:hyper_squad:775827987413073931> **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)
        .addField("» <a:NekoAtsumeWalk:755851715689054308> **Çalışma süresi**", çalışmasüresi)
        .addField("» <:info:799945822535811073> **Kullanıcılar**", bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
        .addField("» <a:dnya:774588287112970262> **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
        .addField("» <:kanal:804838929559060480> **Kanallar**", bot.channels.size.toLocaleString(), true)
        .addField("» <a:Ayar:755412657724457131> **Discord.JS sürüm**", "v" + Discord.version, true)
        .addField("» <:js:777274680686936103> **Node.JS sürüm**", `${process.version}`, true)
        .addField("» <a:yengec:762624249172852746> **Ping**", bot.ws.ping + " ms", true)
        .addField("» <a:coin:775827989207187466> **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
        .addField("**» Bot Davet Link**", " [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=775683102269505546&scope=bot&permissions=8)",)
    return message.channel.send(lewixcode);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i', 'bilgi'],
    permLevel: 0
};

exports.help = {
    name: "istatistik",
    description: "istatistikler",
    usage: "istatistik"
};