const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.MessageEmbed()
        .setTitle("Kullanıcı Yardım Menüsü")
        .setDescription('**Neanthos Yardım Komutları**')
        .setThumbnail("https://cdn.discordapp.com/attachments/787234386365775872/822964799003951164/discord-avatar-128-animated_1.gif")

        .setColor("RANDOM")
        .addField("**n!istatistik **", "<a:neonntikkk:775685674065330177> **Botun İstatistiğini Gösterir!** <a:sosuzzz:775685632629932042>")
        .addField("**n!rol-bilgi [rol etiketi]**", "<a:neonntikkk:775685674065330177> **Etiketlediğiniz Rolün İstatistiklerine Bakarsınız** <a:sosuzzz:775685632629932042>",)
        .addField("**n!tavsiye [açıklama]**", "<a:neonntikkk:775685674065330177> **Tavsiye Kanalına Mesaj Atarsınız!**`<a:sosuzzz:775685632629932042>",)
        .addField("**n!servericon **", "<a:neonntikkk:775685674065330177>**Yazılan Sunucunun Fotoğrafını Atar!** `<a:sosuzzz:775685632629932042>",)
        .addField("**n!yardım **", "<a:neonntikkk:775685674065330177> **Yardım menüsünü açar** <a:sosuzzz:775685632629932042>",)
        .addField("**n!davet **", "<a:neonntikkk:775685674065330177> **Botun davet linkini atar.** <a:sosuzzz:775685632629932042>",)
        .addField("**n!bot-bilgi **", "<a:neonntikkk:775685674065330177> **Bot bilgilerine bakarsınız** <a:sosuzzz:775685632629932042>",)
        .addField("**n!bilgi **", "<a:neonntikkk:775685674065330177> **Bizim bilgilerimize bakarsınız** <a:sosuzzz:775685632629932042>",)
        .addField("**n!korona [Ülke Kodu] `Yeni!`**", "<a:neonntikkk:775685674065330177> **Belirtilen Bölgenin Korona İstatistiğine Bakarsınız!** <a:sosuzzz:775685632629932042>",)
        .addField("**n!banlist**", "<a:neonntikkk:775685674065330177> **Banlı Listesini Gösterir!** <a:sosuzzz:775685632629932042>",)
        .addField("**n!sunucu-bilgi**", "<a:neonntikkk:775685674065330177> **Sunucu Hakkında Bilgi Verir!** <a:sosuzzz:775685632629932042>",)
        .addField("**n!ping**", "<a:neonntikkk:775685674065330177> **Botun Pingini Gösterir!** <a:sosuzzz:775685632629932042>",)
        .addField("**n!afk**", "<a:neonntikkk:775685674065330177> **Afk Olursunuz!** <a:sosuzzz:775685632629932042>",)
        .addField("**n!çekiliş**", "<a:neonntikkk:775685674065330177> **Çekiliş Yaparsınız!** <a:sosuzzz:775685632629932042>",)
        .addField("**n!kurallar**", "<a:neonntikkk:775685674065330177> **Kuralları Yazar!** <a:sosuzzz:775685632629932042>",)
        .setFooter('**--------------------------**')
        .setFooter('n!davet Yazarak Botumuzu Ekleyebilirsiniz!')
        .addField("**Developers**", " **Drizzy.exe** ",)
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
};

exports.help = {
    name: 'kullanıcı',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};