const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence  Yardım Menüsü")
  .setDescription('**Neanthos Yardım Komutları**')
  .setThumbnail("https://cdn.discordapp.com/attachments/787234386365775872/822964799003951164/discord-avatar-128-animated_1.gif")
  
  .setColor("RANDOM")
  .addField("<:hyper22222:777217984149454868> **n!aşkölçer [etiket]**" , " **Etiketlediginiz Kişi İlt Aşkınızı Ölçer Siniz** ")
  .addField("<:hyper22222:777217984149454868> **n!öp [etiket] **", " **Etiketlediğiniz Kişiyi Öpersiniz** ",)
  .addField("<:hyper22222:777217984149454868> **n!Tavsiye **", " **Tavsiye Kanalına Mesaj Atarsınız!**`",)
  .addField("<:hyper22222:777217984149454868> **n!saat **", "**Saatin Kaç Oldugunu Gösterir** `",)
  .addField("<:hyper22222:777217984149454868> **n!koş **", " **Koşarsınız**",)
  .addField("<:hyper22222:777217984149454868> **n!banner-yaz **", "**Mesajınızı Banner Olarak Yazar!** `",)
  .addField("<:hyper22222:777217984149454868> **n!embed-yaz **", "**Mesajınızı Embed Olarak Yazar!** `",)
  .addField("<:hyper22222:777217984149454868> **n!mesaj-döndür [yazı] **", " **İstediğiniz Yazıyı Döndürür!** ",)
  .addField("<:hyper22222:777217984149454868> **n!kasa-aç **", " **CS:GO Kasa Açar!**",)
  .addField("<:hyper22222:777217984149454868> **n!yapımcım **", " **Yapmcımı Gösterir!**",)
  .addField("<:hyper22222:777217984149454868> **n!kafasalla **", " **Kafa'nı Sallarsın!**",)
  .addField("<:hyper22222:777217984149454868> **n!yazıtura **", " **Yazı'mı Tura'mı!**",)
  .addField("<:hyper22222:777217984149454868> **n!kedi **", " **Kedi Gifi Atar!**",)
  .addField("<:hyper22222:777217984149454868> **n!kaçcm **", " **Beraber Malafatının Kaç cm Olduğunu Öğrenelim!**",)
  .addField("<:hyper22222:777217984149454868> **n!nahçek **", " **İstediğin Kişiye Nah Çek!**",)
  .addField("<:hyper22222:777217984149454868> **n!steam **", " **Steam'a Girmeden Oyunların Fiyatlarına Bakabilirsiniz!**",)
  .addField("<:hyper22222:777217984149454868> **n!tekme-at **", " **İstediğin Birisine Tekme Atarsın!**",)
  .addField("<:hyper22222:777217984149454868> **n!arkadaşın **", " **Arkadaşını Bilir!**",)
  .addField("<:hyper22222:777217984149454868> **n!çayaşekerat **", " **Çaya Şeker Atarsın!**",)
  .addField("<:hyper22222:777217984149454868> **n!çayiç **", " **Çay İçersin!**",)
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};