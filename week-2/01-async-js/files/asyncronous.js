// showTimeout and readFile are the asyncronous function.
// javascript uses single threads only.


function findsum(n){
    let a = 0;
    for(let i = 0; i < n; i++){
        a = a + i;
    }
    return a;
}
function showsum(){
    console.log(findsum(100));
}
// showsum();
setTimeout(showsum, 1000);  
console.log("hello world!!");




const fs = require('fs');
let a = 1;
let ans = 0;
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
    } else {
        console.log("Data read from the file is:");
        console.log(data);
    }
});
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}
console.log("Value of 'a':", a);
console.log("Sum of numbers from 0 to 99:", ans);
