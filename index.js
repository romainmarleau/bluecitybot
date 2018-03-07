const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.login('NDIwMjMxNDg1NTE0MDU1Njgx.DX7qlQ.MZMyW5ebDPyOHJJGi4-_90ObOrk');

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le discord de BlueCityRP ' + member.displayName);
    }).catch(console.error)
});

bot.on('ready!', function() {
    console.log("I'm ready!");
    bot.user.setGame('!bhelp');
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!bhelp') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__Les commandes__',
                description: 
` Vous avez accès aux commandes suivantes: 
        - !ts 
        - !forum
        - !steam
        - !groupe
        - !boutique
        - !etat
        - !ip
        - !recrutement
        - !idee

**Pour utiliser ces commandes vous pouvez les copier/coller.**
`,
            }});
        }
        else if(message.content === '!ts') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__Le TeamSpeak__',
                description: 'Voici le TeamSpeak de BlueCityRP: teamspeak5.mtxserv.fr:10472',
            }});
        }
        else if(message.content === '!forum') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__Le Forum__',
                description: 'Voici le lien du Forum: http://bluecityroleplay.mtxserv.fr/index.php',
            }});
        }
        else if(message.content === '!groupe') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__Le groupe steam__',
                description: 'Voici le lien du groupe steam: http://steamcommunity.com/groups/bluecityroleplay'
            }});
        }
        else if(message.content === '!steam') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__La collection__',
                description: 'Voici le lien de la collection du serveur BlueCityRP: http://steamcommunity.com/sharedfiles/filedetails/?id=1271366205'
            }});
        }
        else if(message.content === '!boutique') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__La Boutique__',
                description: 'Voici le lien de la boutique: http://bluecityroleplay.mtxserv.fr/boutique/'
            }});
        }
        else if(message.content === '!etat') {
            message.channel.send({embed: {
                color: 15158332, //<----Rouge(maintenance):15158332 Vert(ouvert):3066993
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__**maintenance**__', //ouvert
                description: '**Le serveur est actuellement en maintenance!**' //le serveur est actuellement en ligne
            }});
        }
        else if(message.content === '!ip') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__IP du serveur__',
                description: 'voici l\'IP du serveur Gmod: 51.254.57.58:27060'
            }});
        }
        else if(message.content === '!recrutement') {
            message.channel.send({embed: {
                color: 3066993, //<----Vert(ouvert):3066993 Rouge(fermé):15158332
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__État du recrutement__',
                description: 'Les recrutements sont ouvert à l\'adresse: http://bluecityroleplay.mtxserv.fr/index.php?forums/recrutement-mod%C3%A9rateur-on.65/' //Les recrutements sont fermés
            }});
        }
        else if(message.content === '!idee') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: '__Idée-s__',
                description: 'Vous avez une idée de rajout pour le bot? si oui c\'est par là: https://goo.gl/forms/VVV5nKtH32ZncBVP2'
            }});
        }
    }
});
