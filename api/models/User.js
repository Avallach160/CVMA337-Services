var bcrypt = require('bcrypt-nodejs');
module.exports = {
	attributes: {
		email: {
			type: 'email',
			unique: true,
			email: true,
			required: true
		},
		firstName: {
			type: 'string',
			required: true
		},
		lastName: {
			type: 'string',
			required: true
		},
		roadName: {
			type: 'string'
		},
		encryptedPassword: {
			type: 'string'
		},
		positions: {
			collection: 'rank',
			via: 'holders',
			dominant: true
		}
	},

	beforeCreate: function(values, next) {
		bcrypt.genSalt(10, function(err, salt) {
			if (err) return next(err);

			bcrypt.hash(values.password, salt, function(err, hash) {
				if (err) return next(err);

				values.encryptedPassword = hash;
				next();
			});
		});
	},

	validPassword: function(password, user, cb) {
		bcrypt.compare(password, user.encryptedPassword, function(err, match) {
			if (err) cb(err);

			if (match) {
				cb(null, true);
			} else {
				cb(err);
			}
		});
	}
};

