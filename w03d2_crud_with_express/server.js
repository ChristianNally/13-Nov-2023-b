const express = require('express');
const PORT = 8521;

const app = express();
app.set('view engine', 'ejs');


//
// MIDDLEWARE
//
app.use(express.urlencoded({ extended: false }));


//
// DATABASE
//
// const placesToNap = [
//   {name: 'Second Beach', privacyLevel: 10, cozyLevel: 5, volumeRating: 3},
//   {name: 'University Library', privacyLevel: 7, cozyLevel: 2, volumeRating: 7},
// ];

const placesToNap = [
  {name: 'Stanley Park', privacyLevel: 8, cozyLevel: 7, volumeRating: 4},
  {name: 'Queen Elizabeth Park', privacyLevel: 7, cozyLevel: 8, volumeRating: 5},
  {name: 'Vancouver Art Gallery', privacyLevel: 6, cozyLevel: 4, volumeRating: 6},
  {name: 'Kitsilano Beach', privacyLevel: 5, cozyLevel: 6, volumeRating: 4},
  {name: 'Granville Island Public Market', privacyLevel: 4, cozyLevel: 3, volumeRating: 7},
  {name: 'UBC Botanical Garden', privacyLevel: 9, cozyLevel: 7, volumeRating: 3},
  {name: 'VanDusen Botanical Garden', privacyLevel: 8, cozyLevel: 7, volumeRating: 4},
  {name: 'Spanish Banks', privacyLevel: 6, cozyLevel: 8, volumeRating: 3},
  {name: 'Pacific Spirit Regional Park', privacyLevel: 9, cozyLevel: 7, volumeRating: 2},
  {name: 'Grouse Mountain', privacyLevel: 7, cozyLevel: 5, volumeRating: 5}
];

//
// ROUTES
//

//
// Browse
//
app.get('/', (req, res) => {
  console.log('placesToNap', placesToNap);
  const templateVars = {
    places: placesToNap
  };
  res.render('home', templateVars);
});

//
// Read
//
app.get('/read/:key', (req, res) => {

  // console.log('req.params', req.params);
  const key = req.params.key;

  const templateVars = {
    place: placesToNap[key]
  };
  res.render('read', templateVars);
});

//
// Edit
//
app.get('/edit/:key', (req, res) => {
  const key = req.params.key;
  const templateVars = {
    placeToEdit: {
      key: key,
      name: placesToNap[key].name,
      privacyLevel: placesToNap[key].privacyLevel,
      cozyLevel: placesToNap[key].cozyLevel,
      volumeRating: placesToNap[key].volumeRating
    }
  };
  res.render('edit', templateVars);
});

app.post('/edit/:key', (req, res) => {
  const key = req.params.key;

  console.log('key', key);
  console.log('typeof key', typeof key);
  console.log('req.body', req.body);

  // UPDATE A PLACE
  placesToNap[key] = {
    name: req.body.name,
    privacyLevel: req.body.privacyLevel,
    cozyLevel: req.body.cozyLevel,
    volumeRating: req.body.volumeRating
  };

  res.redirect('/');
});

//
// Add
//
app.get('/add', (req, res) => {
  res.render('add'); // get the form for a new place
});

app.post('/add', (req, res) => {
  console.log('req.body', req.body);
  placesToNap.push(req.body); // TODO update types
  res.redirect('/');
});

//
// Delete
//
app.get('/delete/:key', (req, res) => {
  const key = req.params.key;
  placesToNap.splice(key, 1);
  res.redirect('/');
});


//
// Listen Handler
//
app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});


//
// REST APIs
//

VERB /path

GET /blogs
POST /new

DEL ????
PATCH
PUT





