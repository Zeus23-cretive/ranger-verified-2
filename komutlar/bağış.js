const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor("")
        .addField(`**Biri Bana Bağışmı Yapmak İstiyor Bilgilerim Aşşağıda**\n`, `


				__ININAL BARKOD__ : **4092560712239**
				__Banka Adı__ : **İninal**
				__İsim Soyisim__ : **Eray Akcakaya**
 `)
    message.channel.send(embed);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: 'bağış',
    description: 'Bağış Hakkındaki Bilgileri Gösterir.',
    usage: 'bağış'
};