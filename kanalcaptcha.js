module.exports = {
    kod:"captcha",
        async run (client, message, args) {
            client.channels.cache.get(args[0]).send(args[1])
        }
    }