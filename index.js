var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/assets', express.static('public'));
//app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.set('view engine', 'ejs');

app.use('/xss_test', require('./vulnerabilities/xss/'));
app.use('/command_injection', require('./vulnerabilities/command_injection/'));
app.use('/unsafe_eval', require('./vulnerabilities/unsafe_eval/'));
app.use('/crypto', require('./vulnerabilities/crypto/'));
app.use('/http', require('./vulnerabilities/http/'));

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('pages/index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})