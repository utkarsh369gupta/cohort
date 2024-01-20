const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod")


// - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here


const emailschema = zod.string().email()
const passschema = zod.string().min(6);

function signJwt(username, password) {
    const email_res = emailschema.safeParse(username);
    const pass_res = passschema.safeParse(password);

    if (email_res.success && pass_res.success) {
        const signature = jwt.sign({
            username: username,
            password: password,
        }, jwtPassword);
        return signature;
    }
    else {
        return null;
    }
}

// console.log(signJwt("utkarsh@gmail.com", "123456"))



// - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

const string_schema = zod.string();

function verifyJwt(token) {
    // Your code here
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (e) {}
    return false;
}

// console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InV0a2Fyc2hAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0TYiLCJpYXQiOjE3MDU3NTgyMzF9.6d0FnF4Ds2LYEMDwskYUJI9KLzCJ7PoEm3aKYRFtP5c", jwtPassword))


// - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};



// - To test, go to the 02-jwt folder and run `npx jest ./tests`