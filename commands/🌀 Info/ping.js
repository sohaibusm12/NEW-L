const { Client, Message, MessageEmbed } = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns latency and API ping",
    useage: "ping",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(
            new MessageEmbed()
                .setColor(config.colors.yes)
                .setFooter("Made By! sᴏʜᴀɪʙ")
                .setTitle(`${'<a:fi:932028914145034280>'} Pinging....`)
        ).then(msg => {
            msg.edit(
                new MessageEmbed()
                .setColor(config.colors.yes)
                .setFooter("Made By! sᴏʜᴀɪʙ")
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle(`${"<a:fi:932028914145034280>"} Ping: \`${Math.round(Date.now() - message.createdTimestamp)}ms\`\n\n${"<a:fi:932028914145034280>"} Api Latency: \`${Math.round(client.ws.ping)}ms\``)
            )
        })
    }
}