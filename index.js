const Discord = require('discord.js');
const client = new Discord.Client();

var comands = "\nMIS COMANDOS\n\n> **/bonk @username** : bonkea al usuario que menciones \n> **/kissme @username** : Dale un beso en la boca al usuario que menciones \n> **/kiss @username** : Dale un besito al usuario que menciones \n> **/pat @username** : haz un head pat al usuario que menciones \n> **/hug @username** : abraza al usuario que menciones \n> **/credits** : conoce a mis creadores \n> **/help**: conoce todas mis habilidades\n\n OTRAS HABILIDADES \n\n > Puedo saludarte cuando llegas al server diariamente\n > Puedo responder a frases especificas de forma especial...¿Las descubriras todas?\n> Poseo un modo debug para funciones avanzadas\n> Soy capaz de detectar ciertas palabras y reaccionar a ellas";
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
        message.content.toLowerCase().includes('hello') &&
        message.author != client.user) {


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

    //Ima can notice perverts...
    if (message.content.toLowerCase().includes('coje') ||
        message.content.toLowerCase().includes('pechos') ||
        message.content.toLowerCase().includes('chupa') ||
        message.content.toLowerCase().includes('viola') ||
        message.content.toLowerCase().includes('empotra') ||
        message.content.toLowerCase().includes('fuck') ||
        message.content.toLowerCase().includes('profana')
    ) {
        message.reply('', { files: ["./images/pervert.gif"] })
    }

    //Ima can't notice you senpai...
    if (message.content.toLowerCase().includes('te amo') &&
       ( message.content.toLowerCase().includes('ima')
        ||message.mentions.users.first()===client.user)
    ) {
       
        message.reply('https://youtu.be/CY8E6N5Nzec')
    }

    //Bonk user command
    if (message.content.startsWith('/bonk')) {
        const user = message.mentions.users.first();
        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        // If we have a user mentioned
        if (user) {
            message.reply('bonkeó a <@' + user.id + '>!', { files: ["./images/bonk.png"] }).then(
                msg => {
                    if (user === client.user) {
                        channel.send('\nSNIF ¿PERO YO QUE HICE?');
                    }
                }
            );
        }
        else {
            message.reply('¡Necesitas mencionar un usuario! ¡Estas tan confuso que te bonkeas a ti mismo!'
                , { files: ["./images/bonk.png"] });
        }
    }

    //Pat user command
    if (message.content.startsWith('/pat')) {
        const user = message.mentions.users.first();
        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        // If we have a user mentioned
        if (user) {
            random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    message.reply('hizo un head pat a <@' + user.id + '>!', { files: ["./images/pat_pat.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\nG-gracias por mostrarme tu apoyo...');
                            }
                        }
                    );
                    break;
                case 1:
                    message.reply('hizo un head pat a <@' + user.id + '>!', { files: ["./images/pat_pat_2.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\nG-gracias por mostrarme tu apoyo...');
                            }
                        }
                    );
                    break;
                case 2:
                    message.reply('hizo un head pat a <@' + user.id + '>!', { files: ["./images/pat_pat_3.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\nG-gracias por mostrarme tu apoyo...');
                            }
                        }
                    );
                    break;

            }


        }
        else {
            message.reply('¡Necesitas mencionar un usuario!');
        }
    }

    //kiss comand 2
    if (message.content.startsWith('/kiss')) {
        const user = message.mentions.users.first();
        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        // If we have a user mentioned
        if (user) {
            random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    message.reply('le ha dado un besito a <@' + user.id + '>!', { files: ["./images/kiss.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\nG-gracias... No me lo esperaba');
                            }
                            else{
                                channel.send('\n¡Que bonita muestra de cariño!');
                            }
                        }
                    );
                    break;
                case 1:
                    message.reply('le ha daado un besito a <@' + user.id + '>!', { files: ["./images/kiss_2.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\n¡YAY! Mil gracias~');
                            }
                            else{
                                channel.send('\n¡Ey! Yo tambien quiero jo...');
                            }
                        }
                    );
                    break;
                case 2:
                    message.reply('le dio un besito a <@' + user.id + '>!', { files: ["./images/kiss_3.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\n¡Ey! Eso hizo cosquillas');
                            }
                            else{
                                channel.send('\nAwww~');
                            }
                        }
                    );
                    break;

            }


        }
        else {
            message.reply('¡Necesitas mencionar un usuario!');
        }
    }

    //kiss comand 1
    if (message.content.startsWith('/kissme')) {
        const user = message.mentions.users.first();
        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        // If we have a user mentioned
        if (user && user != client.user) {
            random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    message.reply('besó a <@' + user.id + '>!', { files: ["./images/kissme.gif"] }).then(
                        msg => {

                            channel.send('\n AWWW QUE TIERNOOOOS');

                        }
                    );
                    break;
                case 1:
                    message.reply('besó a <@' + user.id + '>!', { files: ["./images/kissme_2.gif"] }).then(
                        msg => {

                            channel.send('\nQuizas deberia mirar para otro lado y dejarles intimidad...');

                        }
                    );
                    break;
                case 2:
                    message.reply('besó a <@' + user.id + '>!', { files: ["./images/kissme_3.gif"] }).then(
                        msg => {

                            channel.send('\n¡Q-que repentino! 0///0');

                        }
                    );
                    break;

            }


        }
        else {
            message.reply('¡Necesitas mencionar un usuario! Y no...yo no cuento...');
        }
    }

    //hug command
    if (message.content.startsWith('/hug')) {
        const user = message.mentions.users.first();
        var channelid = Object.freeze(message.channel.id);
        const channel = message.guild.channels.cache.get(channelid);
        // If we have a user mentioned
        if (user) {
            random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    message.reply('abrazó a <@' + user.id + '>!', { files: ["./images/hug.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\n¡Amo los abrazos!');
                            }
                        }
                    );
                    break;
                case 1:
                    message.reply('abrazó a <@' + user.id + '>!', { files: ["./images/hug_2.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\n¡Amo los abrazos!');
                            }
                        }
                    );
                    break;
                case 2:
                    message.reply('abrazó a <@' + user.id + '>!', { files: ["./images/hug_3.gif"] }).then(
                        msg => {
                            if (user === client.user) {
                                channel.send('\n¡Amo los abrazos!');
                            }
                        }
                    );
                    break;

            }


        }
        else {
            message.reply('¡Necesitas mencionar un usuario!');
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
    if (message.content.startsWith('/debugmode') && message.member.roles.cache.some(role => role.name.toLowerCase() === 'imadmin')) {

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
    if (message.content.startsWith('/cleangreatings') && debugmode === true && message.member.roles.cache.some(role => role.name.toLowerCase() === 'imadmin')) {
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
/*client.on('guildMemberAdd', member => {
    console.log('aqui entro');
    member.guild.channels.get('681880500486537240').send('Bienvenido al server <@' + member.user.id + '>');;
})*/

client.login('');  