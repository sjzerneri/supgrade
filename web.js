require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var gzippo = require('gzippo');
var config = require('config.json');
var nodemailer = require("nodemailer");

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));
app.use('/emailverify', require('./controllers/email.verify.controller'));

//app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/app"));

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});


// start server
var server = app.listen(5000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});