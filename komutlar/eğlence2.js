const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.MessageEmbed()
        .setTitle("Eğlence 2 Menüsü")
        .setDescription('**Neanthos Eğlence Komutları**')
        .setThumbnail("https://cdn.discordapp.com/attachments/787234386365775872/822964799003951164/discord-avatar-128-animated_1.gif")

        .setColor("RANDOM")
        .addField("<:hyper22222:777217984149454868> **n!atatürk **", " **Canım Atam!**",)
        .addField("<:hyper22222:777217984149454868> **n!adamasmaca **", " **Kelimeleri bul Bulamassan Adam Asılır!**",)
        .addField("<:hyper22222:777217984149454868> **n!sor **", " **Bana Soru Sor!**",)
        .addField("<:hyper22222:777217984149454868> **n!hesapla **", " **Benle beraber işlem yap!**",)
        .addField("<:hyper22222:777217984149454868> **n!fal **", " **Fal Bak!**",)
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
    aliases: ["eglence"],
    permLevel: 0
};

exports.help = {
    name: 'eğlence2',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};