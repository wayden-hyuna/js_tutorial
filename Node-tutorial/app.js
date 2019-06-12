////////////////////////////////////////////////////////////////////////
/*

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

*/
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
/*                                OS MODULE


const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

//Template strong
//ES6 /ES2015 : ECMAScript 6


console.log(`Total Free Memory : ${freeMemory}`);
*/
////////////////////////////////////////////////////////////////////////
/*                           FILE MODULE


const fs = require('fs');

fs.readdir('$', function(err, files){

    if(err) console.log('Error ', err)
    else console.log('Results: ', files)

});

*/
////////////////////////////////////////////////////////////////////////
/*                        EVENTS MODULE

const EventEmitter = require('events');

//Register a listener
// using this method and the emitter object we can return information about the event

const Logger = require('./logger');
const logger = new Logger();

logger.on('MessageLogged', arg =>{
    console.log("Listener called", arg);
});

logger.log('message');
*/
///////////////////////////////////////////////////////////////////////
/*                       HTTP MODULE

const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000, console.log("gator listening on port 3000..."));
*/
////////////////////////////////////////////////////////////////////////////

