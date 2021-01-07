const Discord = require('discord.js');
const client = new Discord.Client();

var comands = "\nMIS COMANDOS\n\n> /bonk @username: bonkea al usuario que menciones \n> /credits : conoce a mis creadores \n> /help: conoce todas mis habilidades\n\n OTRAS HABILIDADES \n\n > Puedo saludarte cuando llegas al server diariamente\n > Puedo responder a frases especificas de forma especial...¿Las descubriras todas?\n> Poseo un modo debug para funciones avanzadas";
var ArrayUsers = [];
var ArrayUsersDates = [];
var debugmode = false;

//on event Ima-chan
client.on('ready', () => {
    console.log(client.user.tag + ' is ready!');

});

//Messages for Ima-chan
client.on('message', message => {

    //Say hello to our user
    if (message.content.toLowerCase().includes('hola') ||
        message.content.toLowerCase().includes('holi') ||
        message.content.toLowerCase().includes('hello') ||
        message.content.toLowerCase().includes('hi')) {


        if (ArrayUsers.find(author => author === message.author)) {
            var position = ArrayUsers.indexOf(message.author);
            let fecha1 = ArrayUsersDates[position];
            // console.log(fecha1);
            let fecha2 = new Date(Date.now());
            let resta = fecha2.getTime() - fecha1.getTime();
            let dias = Math.round(resta / (1000 * 60 * 60 * 24));
            //console.log("DIAS TRANSCURRIDOS: "+Math.round(resta / (1000 * 60 * 60 * 24)));
            if (dias >= 1) {
                ArrayUsersDates[position] = fecha2;
                random = Math.floor(Math.random() * 3);
                switch (random) {
                    case 0:
                        message.reply(' bienvenido ^^!');
                        break;
                    case 1:
                        message.reply(' que alegría verte!');
                        break;
                    case 2:
                        message.reply(' te extrañabamos... Yo al menos...');
                        break;
                }
            }


        }
        else {
            var f = new Date(Date.now());
            ArrayUsersDates.push(f);
            ArrayUsers.push(message.author);
            //console.log(ArrayUsers[0]);
            random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    message.reply(' bienvenido ^^!');
                    break;
                case 1:
                    message.reply(' que alegría verte!');
                    break;
                case 2:
                    message.reply(' te extrañabamos... Yo al menos...');
                    break;
            }
        }

    }

    //Bonk user command
    if (message.content.startsWith('/bonk')) {
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            message.reply('bonkeó a <@' + user.id + '>!', { files: ["./images/bonk.png"] });
        }
        else {
            message.reply('¡Necesitas mencionar un usuario! ¡Estas tan confuso que te bonkeas a ti mismo!'
                , { files: ["./images/bonk.png"] });
        }
    }

    //Credits for desingn Ima-chan command
    if (message.content.startsWith('/credits')) {
        message.reply('¡Soy Ima y estoy aquí para ayudarte! \n Fui diseñada por Cesar y May y mi código fue escrito por Kitsu');
    }

    //User guide command
    if (message.content.startsWith('/help')) {
        message.reply(comands);
    }

    //Debug mode command
    if (message.content.startsWith('/debugmode') && message.member.roles.cache.some(role => role.name === 'Imadmin')) {

        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        if (debugmode === false) {
            debugmode = true;
        }
        else {
            debugmode = false;
        }
        message.delete();
        //console.log(channel);
        if (debugmode === true) {
            channel.send('Ima-chan activó el modo debug').then(msg => {
                msg.delete({ timeout: 2000 });
            });
        }
        else {
            channel.send('Ima-chan desactivó modo debug').then(msg => {
                msg.delete({ timeout: 2000 });
            });
        }




    }

    //clean greatings
    if (message.content.startsWith('/cleangreatings') && debugmode === true && message.member.roles.cache.some(role => role.name === 'Imadmin')) {
        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        ArrayUsersDates = [];
        ArrayUsers = [];
        channel.send('LIMPIADO EL REGISTRO DE SALUDOS').then(msg => {
            msg.delete({ timeout: 2000 });
        });
        message.delete();


    }
    //Response for say 'I love you'
    if (message.content.toLowerCase().includes('te quiero')) {
        const user = message.mentions.users.first();
        let random;
        // If we have a user mentioned
        if (user) {
            if (user != client.user) {
                random = Math.floor(Math.random() * 3);
                switch (random) {
                    case 0:

                        message.reply('y <@' + user.id + '> debajo de un arbol besándose... 7//v//7');
                        break;

                    case 1:

                        message.reply('SE ACABA DE DECLARAR  A <@' + user.id + '> ?!');
                        break;

                    case 2:

                        message.reply('le lanzó un hechizo de amor a <@' + user.id + '>');
                        break;
                }
            }
            if (user === client.user) {
                random = Math.floor(Math.random() * 3);
                switch (random) {
                    case 0:
                        message.reply('¡N-no puedo hacer favoritismos! Amo a todos aquí...');
                        break;
                    case 1:
                        message.reply('Aww... Eres una dulzura...');
                        break;
                    case 2:
                        message.reply('¡Yo tambien! ¡Quiero a todos mis amigos por igual!');
                        break;
                }
            }
        }
        else {
            message.reply('¿Me lo has dicho a mi? Ah...No...Olvidalo~');

        }

    }
});


// event listener for new guild members
client.on('guildMemberAdd', member => {
    console.log('aqui entro');
    member.guild.channels.get('681880500486537240').send('Bienvenido al server <@' + member.user.id + '>');;
})

client.login('Nzk2NDYzNjk2NTE1NDMyNDU4.X_YSng.eo0I8iKhP1kkUOZbSVEG10yc16I');  