module.exports = {
	authenticate: function(req, res){
		var email = req.param('email');
		var password = req.param('password');

		if (!email || !password) {
			return res.json(401, {err: 'email and password required'});
		}

		User.findOneByEmail(email, function(err, user) {
			if (!user) {
				return res.json(401, {err: 'invalid email or password'});
			}

			User.validPassword(password, user, function(err, valid) {
				if (err) {
					return res.json(403, {err: 'forbidden'});
				}

				if (!valid) {
					return res.json(401, {err: 'invalid email or password'});
				} else {
					res.json({user: user, token: sailsTokenAuth.issueToken(user.id)});
				}
			});
		})
	},
	register: function(req, res) {
		if (req.body === undefined){
			return res.json(400, {err: 'No body found'});
		}
		//TODO: Do some validation on the input
		if (req.body.password !== req.body.confirmPassword) {
			return res.json(401, {err: 'Password doesn\'t match'});
		}
		
		var model = {
			email: req.body.email,
			password: req.body.password,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			roadName: req.body.roadName,
			motorcycle: req.body.motorcycle,
			phoneNumber: req.body.phoneNumber,
			rank: 'Member'
		};

		User.create(model).exec(function(err, user) {
			if (err) {
				res.json(err.status, {err: err});
				return;
			}
			if (user) {
				res.json({user: user, token: sailsTokenAuth.issueToken(user.id)});
			}
		});
	}		
}