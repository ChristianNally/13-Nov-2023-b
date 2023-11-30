const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// helpers
const findUserWithEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];

    if (user.email === email) {
      // we found our user!
      return user;
    }
  }

  return null;
};

// database
const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "1234",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "5678",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body
// app.use(cookieParser()); // creates and populates req.cookies
app.use(cookieSession({
  name: 'whatever',
  keys: ['jkbndsfjklasdf'],
}));

// GET /login
app.get('/login', (req, res) => {
  res.render('login'); // SSR
});

// POST /login
app.post('/login', (req, res) => {
  // pull the data off the body object
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT give us an email or password
  if (!email || !password) {
    return res.status(400).send('please provide an email AND password');
  }

  // lookup the user based on their email
  const foundUser = findUserWithEmail(email);

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // do the passwords NOT match
  const result = bcrypt.compareSync(password, foundUser.password);

  // if (foundUser.password !== password) {
  if (!result) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! the user is who they say they are!

  // set the cookie
  // res.cookie('userId', foundUser.id);
  req.session.userId = foundUser.id;
  
  // redirect the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // check for a cookie
  // const userId = req.cookies.userId;
  const userId = req.session.userId;

  // do they NOT have a cookie?
  if (!userId) {
    return res.status(401).send('you must be signed in to see this page');
  }

  // render the protected page
  const user = users[userId];

  const templateVars = {
    email: user.email
  };

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  // res.clearCookie('userId');
  // req.session.userId = null; // { userId: null }
  req.session = null; // clear all cookies

  // send the user somewhere
  res.redirect('/login');
});

// GET /register
app.get('/register', (req,res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // pull the data off the body object
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT give us an email or password
  if (!email || !password) {
    return res.status(400).send('please provide an email AND password');
  }

  // check if the provided email address is unique
  const foundUser = findUserWithEmail(email);

  // did we find a user
  if (foundUser) {
    return res.status(400).send('a user with that email already exists');
  }

  // the email is unique!! create a new user object
  const id = Math.random().toString(36).substring(2, 5); // creates a random 3-char string

  // generate the hash
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = {
    id: id,
    email: email,
    password: hash,
  };

  // update the users object
  users[id] = user;

  console.log(users);

  // send the user to the login page
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
