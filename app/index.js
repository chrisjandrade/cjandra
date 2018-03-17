const express = require('express');

module.exports = function (config) {

	const app = express();

	app.use('/', express.static('public/'));

	app.listen(config.SERVER_PORT, () => {
		console.info(`Server is running on port ${config.SERVER_PORT}`);
	});

};
