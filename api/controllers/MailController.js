var nodemailer = require('nodemailer');
var local = require('../../config/local.js');
module.exports = {
	send: function(req, res){
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: local.cmvaMailUser,
				pass: local.cvmaMailPw
			}
		});
		transporter.sendMail({
		    from: 'cvma337@gmail.com',
		    to: req.body.to,
		    subject: req.body.subject,
		    html: req.body.body
		}, function(err, success){
			if (err !== null){
				return res.json({errorSendingMail: err});
			}
			return res.json({sent: 'email sent'});
		});
	}
};