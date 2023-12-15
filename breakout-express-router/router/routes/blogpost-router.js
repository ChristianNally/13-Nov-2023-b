const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.use((req, res, next) => {
  // if (!req.cookies.user_id) {
  //   return res.redirect('/login');
  // }

  console.log('inside the blogpost router');

  next();
});

// GET /api/blogposts/
router.get('/', (req, res) => {
  db.query('SELECT * FROM blogposts;')
    .then((response) => {
      const blogposts = response.rows;
      res.json(blogposts);
    });
});

// GET /api/blogposts/:id
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM blogposts WHERE id = $1;', [req.params.id])
    .then((response) => {
      const blogpost = response.rows[0];
      res.json(blogpost);
    });
});

module.exports = router;
