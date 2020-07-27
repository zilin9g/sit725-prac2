
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// use for store accounts
let accounts = [ {id:1,name:'alex',deposit:5},{id:2,name:'sarah',deposit:5},{id:3,name:'jim',deposit:15}];
//linked list
var list = require('./LList.class');
//the reason of use a linkedlist instead of an array is that Linked lists are easier to traverse and linked lists are not limited by length
var account1={id:1,name:'alex',deposit:5};
var account2={id:2,name:'sarah',deposit:5};
var account3={id:3,name:'jim',deposit:15}
list.insert(account1,'head');
list.insert(account2,account1);
list.insert(account3,account2);
app.get('/', function (req, res) {
  res.render("index.html");
})
//add numbers
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
 //get data from array
 app.get('/getArrayData', function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    
    // 输出 JSON 格式
    response = {
        data:accounts
    };
    res.end(JSON.stringify(response));
 })
 //get data from array
 app.get('/getArrayDataById', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var id = req.query.id;
  var account;
  for(var i=0;i<accounts.length;i++)
  {
    if(accounts[i].id==id)
    {
      account=accounts[i];
    }
  }
  // 输出 JSON 格式
  response = {
      data:account
  };
  res.end(JSON.stringify(response));
})

 //get data from linked list
 app.get('/getLinkedData', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var accounts = [];
  var node = list.findLast();
  while(node.element!='head')
  {
    accounts.push(node);
    node = node.previous;
  }
  // 输出 JSON 格式
  response = {
      data:accounts
  };
  res.end(JSON.stringify(response));
})
//get data from linked list
app.get('/getLinkedDataById', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var id = req.query.id;
  var account;
  var node = list.findLast();
  while(true)
  {
    if(parseInt(node.element.id)==parseInt(id))
    {
      account=node.element;
      break;
    }
    if(node.previous==null)
    {
      account=null;
      break;
    }else{
      node = node.previous;
    }
    
  }
  // 输出 JSON 格式
  response = {
      data:account
  };
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
//print host
  console.log("App is listening on http://%s:%s", host, port)

})
