function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumoffunc(n, func){
    return func(n);
}

let ans = sumoffunc(3, cube)
console.log(ans);








