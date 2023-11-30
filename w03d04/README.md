# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [ ] REST
- [ ] More HTTP methods
- [ ] Method Override [Stretch]

### Hashing
* one way process => cannot be undone
* plaintext password => hashing algo => 60 char seemingly random string
* add a salt
* 'abcd' + 'fasdjgfhhduisfhga' => hash algo => hash

### Encryption
* two way process
* set a cookie => encrypt the cookie => 'adsf8asdhfaksdhfiashdf'
* 'adsf8asdhfaksdhfiashdf' => decrypt cookie => 'abc'

setting a cookie
  res.cookie('userId', user.id);
  req.session.userId = user.id;
reading a cookie
  req.cookies.userId
  req.session.userId
clear a cookie
  res.clearCookie('userId');
  req.session.userId = null;
  req.session = null;


http://localhost:3000/protected

Man in the Middle (MitM)
Monster in the Middle (MitM)

### HTTPS
* HTTP Secure
* encrypted
* asymetric cryptography => the key that locks the info is not the same as the one that unlocks it
* public key/private key

https://www.google.com/

### REST
* RESTful architecture
* REpresentational State Transfer

* naming convention for routes
* resources are plural /users /cars /dinosaurs
* actions are singular /login /register

GET /all-the-users
POST /create-a-new-user

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete



<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>





