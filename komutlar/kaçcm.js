const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (!message.guild) {
        return
    }
    let sonuc = [
        "``1CM``\nƐ=>",
        "``2CM``\nƐ==>",
        "``3CM``\nƐ===>",
        "``4CM``\nƐ====>",
        "``5CM``\nƐ=====>",
        "6CM\nƐ======>",
        "``7CM``\nƐ=======>",
        "``8CM``\nƐ========>",
        "``9CM``\n=========)",
        "``10CM``\nƐ==========>",
        "``11CM``\nƐ===========>",
        "``12CM``\nƐ============>\nKalkıyor kalkıyor...",
        "``13CM``\nƐ=============>",
        "``14CM``\nƐ==============>",
        "``15CM``\nƐ=============>\nÇıkarda gölgesinde rakı içek aq",
        "``16CM``\nƐ=============>\nUçak?",
        "``17CM``\nƐ=============>\nSağlam linkmiş.",
        "``18CM``\nƐ=============>\nSayın yolcularımız 31 NOLU uçağımız havalimanından kalkmaktadır.",
        "``19CM``\nƐ=============>\nKırk yıllık kampçıyım böyle çadır görmedim a*k",
        "``20CM``\nƐ=============>\nKuşa fazla yem verdin galiba?",
        "`21CM`\nƐ=============>\nMalzeme kaç torba çimento attın aq?"
    ];

    let result = Math.floor(Math.random() * sonuc.length);

    let kacembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL())
        .setColor('260aff')
        .addField("Malafat, diyecek laf yok...", sonuc[result]);

    message.channel.send(kacembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kaçcm", "kaccm"],
    permLevel: 0
};

exports.help = {
    name: "kaçcm",
    description: "kaccm",
    usage: "kaçcm"
};