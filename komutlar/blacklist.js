const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
    let id = "568755572334395402" //buranın içerisine kendi id ni yaz
    let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
    if (message.author.id !== id) return message.channel.send("Bu komutu yalnızca bot sahibi kullanabilir!")
    if (!args[0]) return message.channel.send("Lütfen **aç** veya **kapat** yazınız.\nKullanıcının karaliste bilgisini görmek için **bilgi** kullanın ör:`!blacklist bilgi `")
    switch (args[0]) {
        case "aç":
            if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın.")
            if (user.id == id) return message.channel.send("Bu kullanıcı karalisteye alınamaz.")

            db.set(`cokaradalistere_${user.id}`, true)
            message.channel.send(`\`${user.tag}\` **artık botu kullanamayacak.**`)
            break;
        case "kapat":
            if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın.")
            if (user.id == id) return message.channel.send("Bu kullanıcı karalisteye alınamaz.")
            db.delete(`cokaradalistere_${user.id}`)
            message.channel.send(`\`${user.tag}\` **artık botu kullanabilir.**`)
            break;
        case "bilgi":
            if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın.")
            let i = db.fetch(`cokaradalistere_${user.id}`)
            if (i == true) message.channel.send(`\`${user.tag}\` botu şu anda **kullanamıyor.**`)
            else message.channel.send(`\`${user.tag}\` botu şu anda **kullanabiliyor.**`)

            break;
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["karaliste"],
    permLevel: 0,
    kategori: "geliştirici"
};

exports.help = {
    name: 'blacklist',
    description: 'Belirlenen kişinin botu kullanmasını engeller.',
    usage: 'blacklist  '
};