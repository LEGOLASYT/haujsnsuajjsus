module.exports = {
    kod:"dm",
        async run (client, message, args) {
            message.guild.members.cache.get(args[0]).send(args[1])
        }
    }