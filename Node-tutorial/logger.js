const EventEmitter = require('events'); 
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{

    log(message){
        //send HTTP request
        console.log(message);


        //Raise an event
        this.emit('MessageLogged',{id: 1, url: 'http://'});

    }  
}



module.exports = Logger;