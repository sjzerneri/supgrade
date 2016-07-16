var express=require('express');
var nodemailer = require("nodemailer");
var router = express.Router();
/*
	Here we are configuring our SMTP Server details.
	STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: '', // such as Gmail or Yandex ...
    auth: {
        user: "", // your mail
        pass: "" // your pass
    }
});
var rand,mailOptions,host,link;

router.post('/', sendMessage);
router.get('/verified', recieveMessage);

function sendMessage(req, res){
    rand=Math.floor((Math.random() * 100) + 54);
	host=req.get('host');
	link="http://"+req.get('host')+"/emailverify/verified?id="+rand;

	mailOptions={
		from: '', // your email
		to : req.body.email,
		subject : "Please confirm your Email account",
		html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
			res.end("error");
		}else{
			console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
}

function recieveMessage(req,res){

}

module.exports = router;
