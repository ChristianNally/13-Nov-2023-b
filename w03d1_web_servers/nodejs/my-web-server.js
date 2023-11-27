const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8978;

const server = http.createServer((req, res) => {
    console.log(`a request has been received`);
// console.log('req', req);
// console.log('req.method', req.method);
// console.log('req.url', req.url);

    const route = `${req.method} ${req.url}`;
    console.log('route', route);

    switch (route) {
        case 'GET /home':
            res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
            </head>
            <body>
                <h1>HomePage</h1>
                <p>This is where the MonkeyFuzz Lives</p>
            </body>
            </html>`);
            res.end();
        break;
        case 'GET /contact':
            // res.write('this is the contact page');
            filePath = path.join(__dirname,'views','contact.html');
            console.log('retrieving view from:' + filePath);
            fs.readFile(filePath, 'utf8', (err, fileContent) => {
              if (err) {
                res.statusCode = 500; // 500 means fatal error
                res.write(err.message);
                res.end();
              } else {
                res.statusCode = 200; 
                res.write(fileContent);
                res.end();
              }
            });
        break;
        case 'GET /login':
            res.write('this is the login page');
            res.end();
        break;
        default:
            res.statusCode = 404;
            res.write('404 page not found');
            res.end();
        break;
    }
//    res.end(); // triggers the sending of the response

});

// have the web server listen for incoming requests
server.listen(port, () => console.log(`Server is listening on port ${port}`));
