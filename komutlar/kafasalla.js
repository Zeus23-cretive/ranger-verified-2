const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField(' ')
        return message.author.send(ozelmesajuyari);
    }
    if (message.channel.type !== 'dm') {
        const sunucubilgi = new Discord.MessageEmbed()
            .setAuthor("Salla kafayı, salla!")
            .setColor(3447003)
            .setTimestamp()
            .setDescription('')
            .setImage(`https://im-01.gifer.com/KcY9.gif`)
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
    name: 'kafasalla',
    description: 'Kafa sallarsınız.',
    usage: 'kafasalla'
};