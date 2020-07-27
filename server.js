
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render("index.html");
})
app.get('/addNumber', function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    var Number1=+req.query.Number1;
    var Number2=+req.query.Number2;
    // 输出 JSON 格式
    response = {
        result:(Number1+Number2)
    };
    res.end(JSON.stringify(response));
 })
 app.get('/getData', function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    let accounts = [ {id:1,name:'alex',deposit:5},{id:2,name:'sarah',deposit:5},{id:3,name:'jim',deposit:15}];
    // 输出 JSON 格式
    response = {
        data:accounts
    };
    res.end(JSON.stringify(response));
 })

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
//print host
  console.log("App is listening on http://%s:%s", host, port)

})