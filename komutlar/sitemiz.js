const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed();
    embed.setDescription("**<a:unlem2:775685576396636171> Işte Sitem [Tıkla](https://www.neanthosbot.tk/)**")
        .setImage("https://cdn.discordapp.com/attachments/786234342442926100/787383304680767508/indir_1.png")
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sitemiz'],
    permLevel: 0
}

exports.help = {
    name: 'site',

}
