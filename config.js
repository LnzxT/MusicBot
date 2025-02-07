module.exports = {
    TOKEN: "MTMyNzQxMzQwMzM5NjA3OTY4Ng.GXO3v7.zs1vJCkSz_uP09aHRB4bga9i2I_emIZ7KH9HDQ",
    ownerID: ["1001998928906027038"], //write your discord user id. example: ["id"] or ["id1","id2"]
    botInvite: "https://discord.gg/YJhRqCM2jR", //write your discord bot invite.
    supportServer: "https://discord.gg/YJhRqCM2jR", //write your discord bot support server invite.
    mongodbURL: "mongodb://fevalencio:H4edo7ZkGmLe66Y1@federateddatabaseinstance0-wiyht.a.query.mongodb.net/?ssl=true&authSource=admin&appName=FederatedDatabaseInstance0", //write your mongodb url.
    status: '🎧 Timba Store - Música',
    commandsDir: './commands', //Please don't touch
    language: "pt", //ar, de, en, es, fr, id, it, ja, nl, pt, ru, tr, zh_TW
    embedColor: "#29e6fe", //hex color code
    errorLog: "", //write your discord error log channel id.


    playlistSettings: {
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },


    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
        },


        voiceConfig: {
            leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
            leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

            leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                cooldown: 10000000, //1000 = 1 second
            },

        },

        maxVol: 200, //You can specify the maximum volume level.
    },


    sponsor: {
        status: true, //true or false
        url: "https://codeshare.me", //write your discord sponsor url.
    },


    voteManager: {
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },


    shardManager: {
        shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
    },


}
