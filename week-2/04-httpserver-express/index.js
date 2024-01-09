// npm init -y : this will make package.json file for you
// npm install express: to install express in your machine

const express = require('express')
const port = 3000

const app = express();

app.get('/next', function(req, res){
    res.send({
        stname : "utkarsh",
        desc : "intelligent"
    })
})

app.post('/conversation', function(req, res){
    console.log()
})

app.get('/', function(req, res){
    res.send("hello world!")
})

app.listen(port)
