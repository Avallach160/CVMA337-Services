module.exports = {
	attributes: {
		value: {
			type: 'string',
			enum: ['CO', 'XO', 'SaA', 'Secretary', 'Treasurer', 'Webmaster', 'RoadCaptain', 'Member'],
			required: true
		},
		holders: {
			collection: 'user',
			via: 'position'
		}
	}
};