const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    if (message.author.id !== ayarlar.sahip) return message.channel.send("Bu Komut Bakım Aşamasındadır.");

    const embedyardim = new Discord.MessageEmbed()
        .setTitle("Seviye Yardım Menüsü")
        .setDescription('**Neanthos Yardım Komutları **Not**:komut `Bakım` Aşamasındadır.!**')
        .setThumbnail("https://cdn.discordapp.com/attachments/787234386365775872/822964799003951164/discord-avatar-128-animated_1.gif")

        .setColor("RANDOM")
        .addField("<a:hyper_squad:775827987413073931>** n!seviye <a:neonntikkk:775685674065330177>**", " **Seviyenizi Gösterir!** ")
        .addField("**<a:hyper_squad:775827987413073931> n!seviye resim <a:neonntikkk:775685674065330177>**", " **Seviye Resim Belirler!** ",)
        .addField("**<a:hyper_squad:775827987413073931> n!seviye renk <a:neonntikkk:775685674065330177>**", " **Seviyenize Renk Verir!**`",)
        .addField("**<a:hyper_squad:775827987413073931> n!seviye ödül @rol [Rolün Verileceği Seviye] <a:neonntikkk:775685674065330177>**", "**Belirtilen Seviyeye Rol Ödülü Verir!** `",)
        .addField("**<a:hyper_squad:775827987413073931> n!seviye saydam <a:neonntikkk:775685674065330177>**", "**Seviyenize Saydam Görüntü Verir!** `",)
        .setFooter('**--------------------------**')
        .setFooter('n!davet Yazarak Botumuzu Ekleyebilirsiniz!')
        .addField("**Developer**", " **Drizzy.exe** ",)
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
    name: 'seviye-yardım',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};