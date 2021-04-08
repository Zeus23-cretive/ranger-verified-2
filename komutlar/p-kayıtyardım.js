const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
    if (!db.has(`premod_${message.guild.id}`) == true) {


        return message.channel.send(" Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")


    } else {
        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Kayıt Sistemi')
            .setTimestamp()
            .setDescription('n!yardım yazarak tüm komutlara erişebilirsin.')
            .addField('n!kayıtsistemi', 'kayıt sistemini açar veya kapatırsınız..')
            .addField('n!kayıtkanal', 'kayıt kanalını ayarlarsınız kayıt-ol komutu sadece orda çalışır.')
            .addField('n!kayıt-rol-ayarla', 'kayıt-ol komutunu kullanınıca verilecek rol')
            .addField('n!kayıt-ol', 'kayıt olma komutu kayıtsistemi açık değilken kullanılmaz.')
            .setFooter('2021 Neanthos Kayıt Sistemi.')
            .setTimestamp()
            .setThumbnail(client.user.avatarURL())
        message.channel.send(embed)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kayıtyardım',
    description: 'kayıt komutlarını gösterir.',
    usage: 'kayıtyardım'
};