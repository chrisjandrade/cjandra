const express = require('express');

module.exports = function (config) {

	const app = express();

	app.use('/', express.static('public/'));

	app.listen(config.SERVER_PORT, '0.0.0.0');
	console.info(`Server is running on port 0.0.0.0:${config.SERVER_PORT}`);
		
	return app;
};
