const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    //

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if (!args[0]) return message.reply(" En Az \`1 - 100\` Arasında Bir Tam Sayı Değeri Girmelisiniz. <a:Dikkat:777217973634465792>");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Temizlendi **${args[0]}** <a:neonntikkk:775685674065330177>`).then(msg => msg.delete(5000));
    });
}

module.exports.help = {
    name: "sil"
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["temizle"],
    permLevel: 1,
};

exports.help = {
    name: 'sil',
    description: '',
    usage: '',
}