/**
 * Created by administrator on 7/16/16.
 */
var express = require('express');
var router = express.Router();

var stripe = require("stripe")(
  "sk_test_HRbhxBVSvTIWiQn5zGcs3JvY"
);

// make JWT token available to angular app
router.post('/', function (req, res) {
  stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: ""
  }, function(err, charge) {
    // asynchronously called
    if (err)
      res.status(400).send({error: err});
    else
      res.send({success: charge});
  });

});

module.exports = router;
