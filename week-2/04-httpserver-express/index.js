// npm init -y : this will make package.json file for you
// npm install express: to install express in your machine

// if you want, when ever you end up editing to your server, and it gets restart again then
// first install nodemon by typing: npm install nodemon
// and to use it type: npx nodemon <file name>

// if you want to send status code then type: res.status(401).send("hello")

const express = require('express')
const bodyparser = require('body-parser')
const port = 3000

const app = express();
app.use(bodyparser.json());

app.get('/next', function (req, res) {
    res.send({
        stname: "utkarsh",
        desc: "intelligent"
    })
})

app.post('/conversation', function (req, res) {
    console.log(req.headers);
    console.log("hi there!!");
    res.send("hello world!")
})

app.post('/check',(req, res) =>{
    const message = req.body.msg;
    console.log(message);
    res.send("hello just checking!!");
})
app.post('/checkquery',(req, res) =>{
    const msgqry = req.query.msg;
    console.log(msgqry);
    res.send("hello just checking query!!");
})

app.post('/try', (req, res) => {
    console.log(req.body);
    res.send("2 + 2 = 4");
})

// factorial 
 
function factorial(n){
    let a = 1;
    for(let i = 1; i <= n; i++){
        a *= i;
    }
    return a;
}
app.get('/factorial', (req, res) =>{
    const fact = req.query.n;
    let ans = factorial(fact);
    console.log(ans);
    res.send(`Factorial of ${fact}: ${ans}`);
})

app.get('/', function (req, res) {
    // res.send("hello world!")
    res.send("hi there")
})

app.listen(port, () =>{
    console.log(`yes, server is running fine at the port ${port}`);
})
