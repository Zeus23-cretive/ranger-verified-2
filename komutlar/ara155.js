const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
        return message.author.send(ozelmesajuyari);
    }
    if (message.channel.type !== 'dm') {
        const sunucubilgi = new Discord.MessageEmbed()
            .setAuthor(message.author.username + ' Polis Geliyor!!!!')
            .setColor('RANDOM')
            .setTimestamp()
            .setImage(`https://cdn.discordapp.com/attachments/757343062115745974/787985756064186368/tenor_1.gif`)
        return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ara155',
    description: 'Polisi Arar (ciddiye almayın)',
    usage: 'ara155'
};