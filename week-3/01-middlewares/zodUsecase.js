// when you are creating a real time server then you need to check a lot of authentications
// for this purpose zod is used


const express = require('express')
const zod = require('zod')

const Schema = zod.array(zod.number());

const app = express()

app.use(express.json())  // this is also a middleware

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const response = Schema.safeParse(kidneys);
    // const kidneylength = kidneys.length;
    if (!response.success) {
        res.status(411).json({
            msg: "inpur is invalid"
        })
    }
    else {
        res.send(response);
    }
})


// global catch
// app.use(function(err, req, res, next){
//     res.json({
//         msg: "Something wrong with our server."
//     })
// })


// suppose you want to take input like below:
// {
//     email: string => email
//     password: arleast 8 letters
//     country: "in", "us"
// }

const newschema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    // country: zod.literal("in").or(zod.literal("us"))
})

function validation(obj) {
    // const nSchema = zod.array(zod.number());
    // const response = nSchema.safeParse(arr)
    const response = newschema.safeParse(obj)
    console.log(response);
}

app.listen(3000, () => {
    console.log(`Server running at port: 3000.`)
    validation({
        email: "utk369gupta@gmail.com",
        password: "12345674"
    })
})

// ------------------------------------------------------------

