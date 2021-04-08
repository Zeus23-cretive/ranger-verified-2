const croxy = require("croxy-api")
new croxy("MszZUGHf1eG1suaQX9T6kdanKKw")

module.exports.run = async (client, message, args) => {
    const haber = await croxy.sondakika(1)
    const embed = new Discord.MessageEmbed() //Eğer v12 sürümü kullanıyorsanız RichEmbed yerine MessageEmbed yazın.
        .setTitle(`${haber[1].manşet}`)
        .setURL(haber[1].link)
        .setImage(haber[1].resim)
        .setDescription(haber[1].içerik.trim().slice(0, 2044) + "...")
        .addField("Kategori", haber[1].kategori, true)
        .addField("Tarih", haber[1].tarih, true)
        .setColor("RANDOM")
    message.channel.send({ embed: embed })
}

module.exports.conf = {
    aliases: ["sondakika"]
}

module.exports.help = {
    name: "son-dakika",
    description: "Son dakika haberini gösterir.",
    usage: "Bulunmuyor"
}