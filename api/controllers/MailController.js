var nodemailer = require('nodemailer');
var local = require('../../config/local.js');
var EventEmitter = require('events').EventEmitter;

module.exports = {
	send: function(req, res){
		var un = local.cvmaMailUser;
		var pw = local.cvmaMailPw;

		var transporter = nodemailer.createTransport({
			// service: 'gmail',
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: un,
				pass: pw
			},
			debug: false
		});

		//use when debug:true
		//transporter.on('log', function(data){
		//	console.log(data);
		//});

		transporter.sendMail({
		    from: 'cvma33.7@gmail.com',
		    to: req.body.to,
		    subject: req.body.subject,
		    html: req.body.body
		}, function(err, success){
			console.log(err, success);
			if (err !== null){
				return res.json(400, {errorSendingMail: err});
			}
			return res.json({sent: 'email sent'});
		});
	}
};
