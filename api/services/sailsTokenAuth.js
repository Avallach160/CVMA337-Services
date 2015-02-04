var jwt = require('jsonwebtoken');
var local = require('../../config/local.js');

module.exports.issueToken = function(payload){
	var token = jwt.sign(payload, local.token_secret || 'Super secret string thingy');
	return token;
};

module.exports.verifyToken = function(token, verified) {
  return jwt.verify(token, local.token_secret || 'Super secret string thingy', {}, verified);
};