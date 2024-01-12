// map is the high-order function that is designed for array only but can be applied to json also.

const arr = [1, 2, 3, 4, 5]

// const newarr = [];
// for (let i = 0; i < arr.length; i++){
//     newarr.push(arr[i] * 2);
// }
// console.log(newarr);

// const newarr2 = arr.map(function (a) {
//     return a * 2;
// })
// console.log(newarr2);

// assignment:
// create a map function that takes 2 inputs, that is, an array, and a transformation callvack/ function and transform the array into a new one using the transform function.

function fn(a) {
    return a.map(function (i) {
        return i * 2;
    })
}
function newmap(arr, fn) {
    return fn(arr);
}

const finalarray = newmap(arr, fn);
console.log(finalarray)


// ----------------------------------------------------------------------


// filter

// const newArr = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2 == 0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr)


const ans = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
})
console.log(ans)
