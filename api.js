var count = 0,
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/', function (req, res, next) {
	count++
	console.log(req.body)
	var dt = new Date();
	req.body.count = count
	req.body.date = dt.toUTCString();
	res.send(req.body)
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '';

app.listen(server_port, server_ip_address)