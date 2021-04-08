const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.delete();

    let question = args.join(' ');

    let user = message.author.username

    if (!question) return message.channel.send(

        new Discord.MessageEmbed()

            .addField(`:x:yazı yazman gerek :x:`)).then(m => m.delete(5000));

    console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
    message.channel.send(

        new Discord.MessageEmbed()

            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setFooter('Neanthos', client.user.avatarURL())

            .addField(`**Oylama**`, `**${question}**`)).then(function (message) {

                message.react('👍🏻');

                message.react('👎🏻');

            });

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oylama'],

    permLevel: 2
};

exports.help = {
    name: 'brooyla',
    description: 'Oylama yapmanızı sağlar.',
    usage: 'brooyla <oylamaismi>'
};