const express = require('express');
const path = require('path');
const sample = require('./data.json');
const app = express();
const print = require('./utils');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
	console.log(`App running on ${PORT}`);
});

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
	res.render('./pages/index', { details: sample.function }, (err, html) => {
		if (!err) {
			print(html);
		}
	});
});
