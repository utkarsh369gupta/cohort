// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve("successfull!!!");
//     }
//     else {
//         reject("mission failed!!");
//     }
// })

// p.then((message) => {
//     console.log("this is in then: " + message);
// }).catch((message) => {
//     console.log("this is under the catch: " + message);
// })




// let userleft = false;
// let userwacthingcatmeams = false;

// function watchtutorial(callback, errorcallback) {
//     if (userleft) {
//         errorcallback({
//             desc: "user left",
//             mess: ":)"
//         })
//     }
//     else if (userwacthingcatmeams) {
//         errorcallback({
//             desc: "user watching cat meams",
//             mess: "watchtutorial < cat"
//         })
//     }
//     else {
//         callback({
//             desc: "want to watch",
//             mess: "more inclined towards carrer"
//         })
//     }
// }
// watchtutorial((message) => {
//     console.log("successfull " + message.mess);
// }, (error) => {
//     console.log(error.desc + ' ' + error.mess);
// })




// function watchtutorialUsingPromises() {
//     return new Promise((resolve, reject) => {
//         if (userleft) {
//             reject({
//                 desc: "user left",
//                 mess: ":)"
//             })
//         }
//         else if (userwacthingcatmeams) {
//             reject({
//                 desc: "user watching cat meams",
//                 mess: "watchtutorial < cat"
//             })
//         }
//         else {
//             resolve({
//                 desc: "want to watch",
//                 mess: "more inclined towards carrer"
//             })
//         }
//     })

// }



// watchtutorialUsingPromises().then((mess) => {
//     console.log("successfull " + mess.mess);
// }).catch((error) => {
//     console.log(error.desc + ' ' + error.mess);
// })





// const recordvideoone = new Promise((resolve, reject) => {
//     resolve("Video one recorded successfully!!!!");
//     // reject("failed!!!");
// })

// const recordvideotwo = new Promise((resolve, reject) => {
//     resolve("Video two recorded successfully!!!!");
//     // reject("failed!!!");
// })

// const recordvideothree = new Promise((resolve, reject) => {
//     resolve("Video three recorded successfully!!!!");
//     // reject("failed!!!");
// })

// Promise.all([
//     recordvideoone,
//     recordvideotwo,
//     recordvideothree
// ]).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log("there is some terrified error!!!" + error)
// })



// const fs = require("fs");

// // ugly way - without using promise
// function mistryWithoutPromis(resolve) {
//     fs.readFile("week-2/02-nodejs/files/a.txt", "utf-8", function (err, data) {
//         resolve(data);
//     })
// }

// // code with syntactical sugar - using promise
// function mistry() {
//     return new Promise(function (resolve) {
//         fs.readFile("week-2/02-nodejs/files/a.txt", "utf-8", function (err, data) {
//             resolve(data);
//         })
//     })
// }

// function newfunc(data) {
//     console.log(data);
// }

// mistryWithoutPromis(newfunc);
// mistry().then(newfunc);


// let d = new Promise(function(resolve) {
//     setTimeout(function(){
//         resolve("hello");
//     }, 1000);
// })

// function func(){
//     console.log(d);
// }

// d.then(func);
// console.log(d)



// function utk(){
//     return new Promise(function(resolve){
//         resolve("hello my name is utkarsh");
//     })
// }

// utk().then(function(data){
//     console.log(data);
//     console.log("hello you fucked up the concept");
// })


// function utk(){
//     return new Promise(function(resolve){
//         setTimeout(resolve, 2000);
//     })
// }

// utk().then(function(resolve){
//     console.log("hello there!!!");
// })

// function boss(hell){
//     setTimeout(hell, 2000);
// }
// boss(function(){
//     console.log("hello there!!");
// })


// asyn/await synaax

// function utkasyncfunction(){
//     return new Promise(function(resolve){
//         // setTimeout(resolve, 3000);
//         setTimeout(function(){resolve("utkarsh")}, 3000);
//         setTimeout(function(resolve){console.log("utkarsh")}, 3000);
//     })
// }

// async function main(){
//     const value = await utkasyncfunction();
//     console.log(value);
//     console.log("hello my friend");
// }

// main();
// console.log('hello my name is lakhan');




// function PromisifiedTimeout(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     })
// }
// // Promising chaining
// // PromisifiedTimeout(1000).then(function(){
// //     console.log("first time out");
// //     return PromisifiedTimeout(2000)
// // }).then(function(){
// //     console.log("second promise");
// // })
// // or
// PromisifiedTimeout(1000).then(function(){
//     console.log("first time out");
//     PromisifiedTimeout(2000).then(function(){
//         console.log("second prmise");
//     })
// })




// function fn() {
//     return "hello there";
// }
// let x = Promise.resolve(fn())
// x.then(function (value) {
//     console.log(value)
// })
