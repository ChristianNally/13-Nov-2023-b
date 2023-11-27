const express = require('express');
const PORT = 8089;
const app = express();

// configuration
app.set('view engine', 'ejs');

// middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {

    const templateVars = {
        fullname: 'Monkey Fuzz',
        loggedIn: true
    };

    res.render('home', templateVars);
});

app.get('/contactus', (req, res) => {
    res.render('contact');
});

app.post('/contactus', (req, res) => {
    console.log('req.body', req.body);
    res.redirect('/');
});

app.get('*', (req, res) => {
    res.send('404 page not found');
});

app.listen(PORT, () => {
    console.log(`Server is listening to PORT=${PORT}`);
});


