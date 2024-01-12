
// const express = require('express');
// const app = express();

// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// app.get('/factorial', (req, res) => {
//     const fact = req.query.n;
//     let ans = factorial(fact);
//     console.log(ans);
//     // Sending the result as a response
//     res.send(`Factorial of ${fact} is: ${ans}`);
// });

// // Start the server
// const port = 3000; // You can change this to your desired port number
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const app = express();

var users = [
    {
        name: 'Utkarsh',
        kidneys: [{ healthy: false }, { healthy: true }]
    },
    {
        name: 'Samarth',
        kidneys: [{ healthy: true }, { healthy: true }]
    },
    {
        name: 'Xyz',
        kidneys: [{ healthy: false }, { healthy: false }]
    }
];

app.get('/checkkidneys', (req, res) => {
    const userIndex = req.params.n;
    if (userIndex >= 0 && userIndex < users.length) {
        let user = users[userIndex];
        let userKidneys = user.kidneys;
        let userLength = userKidneys.length;
        let healthyKid = 0;

        for (let i = 0; i < userLength; i++) {
            if (userKidneys[i].healthy) {
                healthyKid += 1;
            }
        }

        let unhealthyKid = userLength - healthyKid;
        res.send(`${user.name}, you have ${healthyKid} healthy and ${unhealthyKid} unhealthy kidneys.`);
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
const port = 3000; // You can change this to your desired port number
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});
