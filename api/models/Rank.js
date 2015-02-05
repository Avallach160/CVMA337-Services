module.exports = {
	attributes: {
		id: {
			type: 'integer',
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},
		value: {
			type: 'string',
			enum: ['CO', 'XO', 'SaA', 'Secretary', 'Treasurer', 'Webmaster', 'Member'],
			defaultsTo: 'Member'
		},
		holders: {
			model: 'user'
		}
	}
};