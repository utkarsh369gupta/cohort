// http://latentflip.com/loupe/       this is the site where you can check out the synchronous and assynchronous runtime of javascript
// just write loupe to the search engine



const fs = require("fs")

fs.readFile("week-2/02-nodejs/files/a.txt", "utf-8", function (err, data) {   //readFile is also a asynchronous function.
    console.log(data);
    data = data + "I am boss. ";
    fs.writeFile("week-2/02-nodejs/files/a.txt", data, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    });
})


console.log("hi there");

let a = 0;
for (let i = 0; i < 10000; i++) {
    a = a + 1;
}

console.log("hi there 2");