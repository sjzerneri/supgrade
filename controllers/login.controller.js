var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
  // log user out
  delete req.session.token;

  // move success message into local variable so it only appears once (single read)
  var viewData = {success: req.session.success};
  delete req.session.success;

  res.send({success: 'Log out'});
});

router.post('/', function (req, res) {
  console.log("login controller");
  // authenticate using api to maintain clean separation between layers
  request.post({
    url: 'http://localhost:5000/api/users/authenticate',
    form: req.body,
    json: true
  }, function (error, response, body) {
    if (error) {
      return res.send(error);
    }

    if (!body.token) {
      return res.send({error: 'Username or password is incorrect', email: req.body.email});
    }

    // save JWT token in the session to make it available to the angular app
    req.session.token = body.token;

    // redirect to returnUrl
    var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
    res.redirect(returnUrl);
  });
});

module.exports = router;
