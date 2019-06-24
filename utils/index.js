const pdf = require('html-pdf');

const print = function(htmls) {
	var options = {
		format: 'A3'
	};

	pdf.create(htmls, options).toFile('./sample.pdf', function(err, res) {
		console.log({ err, res });
		if (err) return console.log(err);
		console.log(res);
	});
};

module.exports = print;
