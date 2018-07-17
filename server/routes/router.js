// custom coloring for anything.
const chalk = require('chalk');
// often refered to as the mini-app. Just a modularized
// version of the express routing system.
const router = require('express').Router();
const request = require('request-promise');
const { jsonServer } = require('../index');
// chainable routes
router.route('/')
  .get( (req, res) => {
    res.status(200).send('Welcome give me a moment');
  });

router.route('/signup')
  .post((req, res) => {
    let options = {
      method: 'GET',
      uri: `http://localhost:1337/api/users?username=${req.body.username}`
    };

    // check to see if the username exists
    request(options)
      .then( (usernameTaken) => {
        usernameTaken = JSON.parse(usernameTaken);

        // throw an error if it does.
        if(usernameTaken.length >= 1){
          throw new Error('Username is already taken');
        } else {
          console.log('help')
          return JSON.stringify(req.body);
        }
      })
      .then( (credentials) => {
        // if not, let's create the user account
        let body = JSON.stringify(req.body);
        console.log(body)
        options = {
          method: 'POST',
          uri: 'http://localhost:1337/api/users',
          body: req.body,
          json: true
        }

        return request(options);
      })
      .then( (newUser) => {
        console.log(chalk.red.bold(newUser))
      })
      .catch((err) =>res.status(400).send(err.stack));
  });

module.exports = router;