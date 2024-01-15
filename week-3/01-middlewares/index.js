
const express = require('express')

const app = express()
const port = 3000

// app.use(express.json())

app.get('/check-kidneys', function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if (username != "utkarsh" || password != "pass") {
        res.status(400).json({ "msg": "somethings up with your inputs." })
        return
    }

    if (kidneyID != 1 && kidneyID != 2) {
        res.status(400).json({ "msg": "something is wrong with your kidney" })
    }

    res.json({
        "msg": "everthing seems fine!!"
    })
})



// if we create put, delete or post function, then also we need do this whole authentication thing again and again which does not follow dry principle. theie comes middleware in picture.

// ----------------------------------------------------------------------

// middlewares

function userMiddleware(req, res, next) {
    if (username != "utkarsh" || password != "pass") {
        res.status(403).json({
            msg: "incorrect inputs",
        })
    }
    else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if (kidneyID != 1 && kidneyID != 2) {
        res.status(403).json({
            msg: "incorrect inputs",
        })
    }
    else {
        next();
    }
}

// app.use(express.json())

app.post("/health-checkup",express.json(), function(req, res){
    const kidneys = req.body.kidneys
    const kidneylength = kidneys.length;
    res.send("you have " + kidneylength + " kidneys");
})

// why do you need to handle error given by your server
// because your error can be broke by another server like 
// chatgpt or other some user
// thats why, it is very important to handle your errors.

// you can also deal this with global catch

// global catches
app.use(function (err, req, res, next) {
    res.json({
        msg: "sorry something is up with our server"
    })
})




app.listen(port, function () {
    console.log(`server is operating at ${port} port.`)
});