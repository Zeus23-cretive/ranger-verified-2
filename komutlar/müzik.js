const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const rexusyardım = new Discord.MessageEmbed()
        .setTitle("Neanthos Müzik Sistemi")
        .setThumbnail("https://cdn.discordapp.com/attachments/787234386365775872/822964799003951164/discord-avatar-128-animated_1.gif")

        .setColor("RANDOM")
        .addField("**n!çal**", "** `Girdiğiniz Müzik İsmini Veya Url'sini Çalar.`**",)
        .addField("**n!durdur**", "** `Şarkıyı Durdurur.`**",)
        .addField("**n!duraklat**", "** `Müziği Duraklatır.`**",)
        .addField("**n!devam**", "** `Duraklattığınız Müziği Başlatır.`**",)
        .addField("**n!geç**", "** `Sıradaki Şarkıya Geçer.`**",)
        .addField("**n!kuyruk**", "** `Müziği Kuyruğa Alır.`**",)
        .addField("**n!ses**", "** `Müziğin Ses Seviyesini Artırır |Önerilen Max Ses seviyesi:10|.`**",)
        .addField("**n!çalan**", "** `Çalan Müziği Gösterir.`**",)




        .setFooter('Neanthos ©️ 2020 Tüm Hakları Saklıdır.')

    if (!params[0]) {
        const rexuscommand = Array.from(client.commands.keys());
        const longest = rexuscommand.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(rexusyardım);
    } else {
        let rexuscommands = params[0];
        if (client.commands.has(rexuscommands)) {
            rexuscommands = client.commands.get(rexuscommands);
            message.author.send('Neanthos', `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` + prefix + `${rexuscommands.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help',],
    permLevel: 0
};

exports.help = {
    name: 'müzik',
    description: 'Müzik komutları gösterir.',
    usage: 'müzik [komut]'
};