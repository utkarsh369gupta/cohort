
import mongoose from 'mongoose'
import express from 'express'
import zod from 'zod'

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://utk369gupta:M3SXr4TfEJq5Iaud@cluster0.cjpwxei.mongodb.net/usersdb');
const users = mongoose.model("user", {name: String, email: String, password: String})


const schema_username = zod.string();
const schema_email = zod.string().email();
const schema_password = zod.string().min(8)

function check(req, res, next){

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const res1 = schema_username.safeParse(username)
    const res2 = schema_email.safeParse(email)
    const res3 = schema_password.safeParse(password)

    if(!res1.success || !res2.success || !res3.success){
        return res.status(404).send("Invalid Inputs!!")
    }
    else{
        next();
    }
}


app.post('/signup',check, async function(req, res) {
    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if(!username || !email || !password){
        return res.status(400).send("Username, email and password required!!!");
    }
    const userexit = await users.findOne({name: username, email: email});
    if(userexit){
        return res.send("Sorry, User already exits");
    }
    
    const user = new users({'name': username, 'email': email, 'password':password});
    user.save();
    res.send("User created successfully!!");
})

app.use(function (err, req, res, next) {
    res.status(500).json({
        msg: "sorry something is up with our server"
    })
})


app.listen(3000, () => {
    console.log("Running Server: 3000");
});
