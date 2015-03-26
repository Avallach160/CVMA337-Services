var nodemailer = require('nodemailer');
module.exports = {
	send: function(req, res){
		var transporter = nodemailer.createTransport();
		transporter.sendMail({
		    from: 'cvma33.7@gmail.com',
		    to: 'cbaird@kairyt.com',
		    subject: 'hello',
		    text: 'hello world!'
		}, function(err, success){
			if (err !== null){
				return res.json({errorSendingMail: err});
			}
			return res.json({sent: 'email sent'});
		});
	}
};