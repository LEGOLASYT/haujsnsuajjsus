module.exports = {
    kod:"gönder",
        async run (client, message, args) {
            client.channels.cache.get(args[0]).send("w send <@827526475426299905> " + args[1])
        }
    }