// custom coloring for anything.
const chalk = require('chalk');
// often refered to as the mini-app. Just a modularized
// version of the express routing system.
const router = require('express').Router();
const { jsonServer } = require('../index');
// chainable routes
router.route('/')
  .get( (req, res) => {
    res.status(200).send('Booyah');
  });

router.route('/signup')
  .post((req, res) => {
    console.log(req.body);

  });

module.exports = router;