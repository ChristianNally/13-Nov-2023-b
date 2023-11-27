const express = require('express');
const PORT = 8776;

const app = express();
app.set('view engine', 'ejs');

// middleware
app.use((req, res, next) => {
    console.log(`ROUTE: ${req.method} ${req.url}`);
    next();
});
app.use(express.urlencoded({extended: false})); // whenever form data comes in with a request, populate req.body with that data


// ROUTES
app.get('/home', (req, res) => {
    const templateVars = {
        name: 'Nally'
    };
    res.render('home', templateVars);
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    console.log('req.body', req.body);
    res.redirect('/home');
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT=${PORT}`);
});
