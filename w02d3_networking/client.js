const net = require('net');
const PORT = 8989;

// connection information stored in an object
const connectionConfig = {
    port: 8989,
    host: 'localhost'
};

// use the factory function inside the net package
// to make a client object which will enable us to 
// interact with other code out on the Internet
const client = net.createConnection(connectionConfig);

client.setEncoding('utf8');

client.on('connect', function(){
    console.log('i have connected to the server:', connectionConfig);
});

client.on('data', function(message){
    console.log(`${message}`);
})

process.stdin.on('data', function(message){
    const sentMessage = `${process.argv[2]} > ${message}`;
    client.write(sentMessage);
});
