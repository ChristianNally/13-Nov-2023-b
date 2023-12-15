# W05D05 - Mid-term Project Kickoff

### Why??
* consolidate all the learning
* confidence
* learn to work as a team

### Pick a Project

### User Stories
* describes how a user can interact with your app
* As a _____, I can ______, because ________

As a logged in user, I can see a list of maps for my area, because I'm interested in things around me

As a non-logged in user, I cannot edit the pins on a map, because they don't belong to me

/planning/user-stories.md

### Nouns
* nouns === resources === tables
* ERD
* lowest fidelity possible

/planning/erd.png
/planning/erd-stretch.png

### Routes
* BREAD operations on each resource
* RESTful routing

GET /all-the-menu-items

/login, /logout

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

/planning/routes.md

### MVP
* Minimum Viable Product
* what is the minimum feature set that a user would find useful
* @KV Minimum Viable Demo (MVD)
* what is the minimum feature set that we can demo in 5 mins
* if you're not gonna show it, don't build it

### User Login/Registration
* please don't

```js
// http://localhost:3000/login/5
app.get('/login/:id', (req, res) => {
  // encrypted cookies
  req.session.user_id = req.params.id;

  // plaintext cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/home');
});
```

### Wireframes/Mockups
* team collaboration
* lowest fidelity

/planning/wireframe-1.png
/planning/wireframe-2.png

### Tech Choices
* Backend - Node, Express, Postgres
* Frontend - HTML, CSS, JS, jQuery, CSS framework (bootstrap, css grid, flexbox, tailwind)

### SPA vs Multi-page
* not mutually exclusive

1. create an .scss file in /styles (home.scss)
2. create a Link in an HTML file that requests the .css version of the file (home.css)
3. middleware will turn home.scss into home.css and put it in the public directory
4. express static middleware will serve up the css

### Divide up the work
* vertical separation => each member is working on a full-stack feature
* horizontal separtion => each member working on a different layer of the stack
* pair programming

### Don't fall on your sword
* focus on your weakest areas

### Communication
* one of your biggest challenges





















