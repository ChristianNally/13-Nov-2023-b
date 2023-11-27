const http = require('http');
const fs = require('fs');
const PORT = 8088;

const server = http.createServer((req, res) => {
  //  console.log('req', req);
  // console.log('req.method', req.method);
  // console.log('req.url', req.url);

  const route = req.method + ' ' + req.url;
  console.log('route', route);

  switch(route){
    case 'GET /':
      fs.readFile('./views/home.html', 'utf8', (error, data) => {
        if (error) {
          console.log('error', error);
        } else {
          console.log('data', data);
          console.log('typeof data', typeof data);
          res.write(data);
        }
      });
      break;
    case 'GET /contactus':
      res.write('call us! 123-456-7890');
    break;
    default:
      res.write('404 page not found');
    break;
  }
  res.end();

});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});