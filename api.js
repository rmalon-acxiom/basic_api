var count = 0,
	express = require('express'),
	bodyParser = require('body-parser'),
	url = require('url'),
	app = express();


app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.json());

app.post('/', function (req, res, next) {
	count++
	body = req.body
	var dt = new Date();
	body.count = count
	body.date = dt.toUTCString();
	res.send(body)
})

app.get('/', function (req, res, next) {
	count++
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	res.send(query)
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '';

app.listen(server_port, server_ip_address)