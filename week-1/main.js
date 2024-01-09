console.log("hello");
function funct(){
    let a = 10;
    console.log(a);
}

let arrobj = [
    {
        n: "utkarsh",
        age: 20
    },
    {
        n: "chandan",
        age: 19
    },
    {
        n: "bhanu",
        age: 19
    },
]
for (let i = 0; i < arrobj.length; i++) {
    if (arrobj[i].age == 19) {
        function disp(){
            console.log(arrobj[i].n)
        }
        setTimeout(disp, 3000);
    }
}
setTimeout(funct, 2000);
let hero = "samarth";
for(let i = 0; i < 14; i++){
    console.log(hero);
}    
// feel free to run the above code, it will give you the very interestion result.
// 


let str = "utkarsh";
console.log(str.length);