var jwt = require('jsonwebtoken');

module.exports.issueToken = function(payload){
	var token = jwt.sign(payload, process.env.TOKEN_SECRET || 'm$MC4LTfXZ%5F3r%^tZ1Vq&2p^Y@PPE9');
	return token;
};

module.exports.verifyToken = function(token, verified) {
  return jwt.verify(token, process.env.TOKEN_SECRET || 'm$MC4LTfXZ%5F3r%^tZ1Vq&2p^Y@PPE9', {}, verified);
};