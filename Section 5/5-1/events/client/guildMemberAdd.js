const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#35f092")
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();

  client.channels.cache.get('705055460255989841').send(embed);
}