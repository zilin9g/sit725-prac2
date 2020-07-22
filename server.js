var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/addNumber', function (req, res) {
    var first=+req.query.first_num;
    var second=+req.query.second_num;
    // 输出 JSON 格式
    response = {
        result:(first+second)
    };
    res.end(JSON.stringify(response));
 })
 app.get('/getData', function (req, res) {
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

  console.log("App is listening on http://%s:%s", host, port)

})