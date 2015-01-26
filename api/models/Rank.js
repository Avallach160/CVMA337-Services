module.exports = {
	attributes: {
		value: {
			type: 'string',
			enum: ['CO', 'XO', 'SaA', 'Secretary', 'Treasurer', 'Webmaster', 'RoadCaptain', 'Member'],
			defaultsTo: 'Member'
		},
		holders: {
			model: 'user'
		}
	}
};