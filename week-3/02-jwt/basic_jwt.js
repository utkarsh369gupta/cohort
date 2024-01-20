

const jwt = require("jsonwebtoken")

const user = {
    name: "utkarsh gupta",
    email: "utkarsh@gmail.com",
    phoneno: "123456"
}

const token = jwt.sign(user, "secret")
console.log(token);

const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXRrYXJzaCBndXB0YSIsImVtYWlsIjoidXRrYXJzaEBnbWFpbC5jb20iLCJwaG9uZW5vIjoiMTIzNDU2IiwiaWF0IjoxNzA1NzU2MDU4fQ.kH7W4vTkJ9OeQEkwrSAYOZpzCNkURWmq4ELZ1BtXt14","secret");


console.log(verify);
