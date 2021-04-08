const Discord = require('discord.js');
exports.run = function (client, message) {
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bot Bilgi')
        .setTimestamp()
        .addField('Kuruluş Yılı', '2020')
        .addField('Bot Sahibi', '<@568755572334395402>')
        .addField('Neden Biz?', 'Gelişmiş Özellikli Botumuz Var ')
        .addField('Davet Linklerini Nasıl Görebilirim?', 'n!davet')
        .addField('Hedefimiz Nedir?', '1000 Sunucu Büyük Hedefim')
        .setFooter('Neanthos - Bot - Bilgi Komutu', client.user.avatarURL())
        .setTimestamp()
        .setThumbnail(client.user.avatarURL())
    message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'bilgi',
    description: '.',
    usage: 'bilgi'
};