//    let çarpı = client.emojis.cache.get("777217984149454868")
// let tik = client.emojis.cache.get("777217984149454868")
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
    let çarpı = client.emojis.cache.get("777217984149454868")
    if (message.author.id !== '660065024731250689') return message.channel.send(çarpı + " Bu komutu sadece `Yapımcım` **kullanabilir!**")
    let nesne = args[0]
    let çarpı2 = client.emojis.cache.get("777217984149454868")
    if (!nesne) return message.channel.send(çarpı2 + ' **Gold üye olacak kişinin idsini girermisin başkan.**')

    await db.set(`gold_${nesne}`, 'tm')
    let tik = client.emojis.cache.get("777217984149454868")
    message.channel.send(`${tik} <@${nesne}> kullanıcısı yani **${nesne}** IDli kullanıcı gold üye oldu!`)
    client.guilds.cache.get("777217984149454868").channels.cache.find(x => x.name === "gold-üye-log").send(`${tik} <@${nesne}> kullanıcısı için gold üyeliği **açıldı!**`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};
exports.help = {
    name: 'gold-ver',
    description: '[Admin Komutu]',
    usage: 'karaliste <ID>'
};
