var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var port = 3000;

const password = 'abc123'

app.listen(port, () => console.log(`Listening on port: ${port}`));

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) =>{
  // console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
})

app.get('/calculator', (req, res) => {
  res.sendFile(__dirname + '/calculator.html')
})

app.post('/calculator', (req, res) =>{
  // console.log(req.body.number1);
  // console.log(req.body.number2);
  var number1 = parseInt(req.body.number1);
  var number2 = parseInt(req.body.number2);
  var sum = number1 + number2
  res.send(`<h1> ${number1} + ${number2} = ${sum} </h1>`)
})

app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/signIn.html')
})

app.post('/signin', (req, res) =>{
  var userName = req.body.userName
  var userPassword = req.body.password
  // console.log(userName)
  // console.log(userPassword)
  if(userPassword == password){
    res.send(`<h1>Welcome ${userName} </h1>`)
  }else{
    res.sendFile(__dirname + '/incorrectPassword.html')
  }
})
