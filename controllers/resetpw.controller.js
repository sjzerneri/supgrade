/**
 * Created by administrator on 7/9/16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
  res.render('register');
});

router.put('/', function (req, res) {
  // register using api to maintain clean separation between layers
  request.put({
    url: config.apiUrl + '/users/:_id',
    form: req.body,
    json: true
  }, function (error, response, body) {
    if (error) {
      return res.send({error: 'An error occurred'});
    }

    if (response.statusCode !== 200) {
      return res.send({
        error: response.body,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      });
    }
  });
});

module.exports = router;
