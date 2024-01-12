// status codes 
// 1. 200 = everything went fine
// 2. 404 = Doctor in not in the hospital
// 3. 500 = mid surgery light went away
// 4. 411 = inputs were incorrect, wrong person came to surgery
// 5. 403 = you were not allowed in the hospital


// creating in memory hospital!!!
// you need to create 4 resourceLimits(4 things that the hospital can do):
// 1. GET=user can check how many kidneys they have and their health
// 2. POST=user can add a new kidney
// 3. PUT=user can replace a kidney, make it healthy
// 4. DELETE=user can remove a kidney


const express = require('express')

const app = express();
const port = 3000;

var users =
    [{
        name: 'Utkarsh',
        kidneys: [{
            healthy: false
        }, {
            healthy: true
        }]
    }, {
        name: 'Samarth',
        kidneys: [{
            healthy: true
        }, {
            healthy: true
        }]
    }, {
        name: 'Xyz',
        kidneys: [{
            healthy: false
        }, {
            healthy: false
        }]
    }]
// console.log(users[0]);

app.get('/:a', (req, res) => {
    const n = parseInt(req.params.a);
    if (n >= 0 && n < users.length) {
        let userkidney = users[n].kidneys;
        let userlength = userkidney.length;
        let healthykid = 0;
        for (let i = 0; i < userlength; i++) {
            if (userkidney[i].healthy) {
                healthykid += 1;
            }
        }
        let unhealthykid = userlength - healthykid;
        res.send(`${users[n].name}, you have ${healthykid} healthy and  ${unhealthykid} unhealthy kidneys.`);
        // res.json({
        //     userlength,
        //     healthykid,
        //     unhealthykid
        // })
    }
    else {
        res.status(404).send("User not found!!!");
    }
})

app.use(express.json())

app.post('/', (req, res) => {
    // const kidneys = req.query.n ? parseInt(req.query.n) : 2;

    const isHeal = req.body.isHealthy;
    const n = req.body.n;

    if (n >= 0 && n < users.length) {
        users[n].kidneys.push({
            'healthy': isHeal
        });
        res.json({
            msg: "Done!!"   // this is updating the number of kidneys but not showing in users, I don't know why.
        })
    }
    else {
        res.status(404).send("User not found!!!");
    }
});

app.put('/', (req, res) => {

    const n = req.body.n;    
    if (n >= 0 && n < users.length) {
        for(let i = 0; i < users[n].kidneys.length; i++){
            users[n].kidneys[i].healthy = true;
        }
        res.json({
            msg: "Done!!!"
        })
    }
    else {
        req.status(404).send("User not found!!!");
    }
});

app.delete('/', (req, res) => {
    const n = req.body.n;
    const newkidneys = [];
    if(n >=0 && n < users.length){
        for(let i = 0; i < users[n].kidneys.length; i++){
            if(users[n].kidneys[i].healthy){
                newkidneys.push({
                    'healthy': true
                })
            }
        }
        users[n].kidneys = newkidneys;
        res.json({
            msg: "Done!!!"
        });
    }
    else{
        res.status(404).send("User not found!!!");
    }
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})