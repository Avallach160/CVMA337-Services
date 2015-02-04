var bcrypt = require('bcrypt-nodejs');
module.exports = {
	attributes: {
		// email: {
		// 	type: 'email',
		// 	unique: true,
		// 	email: true,
		// 	required: true
		// },
		// firstName: {
		// 	type: 'string',
		// 	required: true
		// },
		// lastName: {
		// 	type: 'string',
		// 	required: true
		// },
		// roadName: {
		// 	type: 'string'
		// },
		// encryptedPassword: {
		// 	type: 'string'
		// },
		// motorcycle: {
		// 	type: 'string'
		// },
		// phoneNumber: {
		// 	type: 'string'
		// },
		// isApproved: {
		// 	type: 'boolean',
		// 	defaultsTo: false
		// },
		// position: {
		// 	collection: 'rank',
		// 	via: 'holders'
		// },
		toJSON: function() {
			var obj = this.toObject();
			delete obj.encryptedPassword;
			return obj;
		}
	},

	beforeCreate: function(values, next) {
		bcrypt.genSalt(10, function(err, salt) {
			if (err) return next(err);

			bcrypt.hash(values.password, salt, null, function(err, hash) {
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

