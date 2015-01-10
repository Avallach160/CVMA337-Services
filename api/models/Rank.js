module.exports = {
	attributes: {
		value: {
			type: 'string',
			enum: ['CO', 'XO', 'SaA', 'Secretary', 'Treasurer', 'Webmaster'],
			required: true
		},
		holders: {
			collection: 'user',
			via: 'positions'
		}
	}
};