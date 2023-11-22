const net = require('net');
const PORT = 8989;

const listOfClients = [];

// use the factory function inside the net 
// package to make a server object
const server = net.createServer();


// set up an event handler, that will handle the
// "connection" event
server.on('connection', function(client){
    console.log('a client has connected!');
    listOfClients.push(client);

    client.setEncoding('utf8');

    // add an event handler to THIS client
    // this handler will run whenever data comes in from 
    // THIS client
    client.on('data', function(msg){
        console.log('msg', msg);
        for (let connectedClient of listOfClients) {
            if (connectedClient !== client) {
                connectedClient.write(msg);
            }
        }
    });

});

// set up some feedback when the server is listening
server.listen(PORT, function(){
    console.log(`Server is listening on port=${PORT}`);
});
