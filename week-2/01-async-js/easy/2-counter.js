// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.


function counter() {
    let count = 0;
    function updatecounter(){
        count++;
        console.log(count);
        setTimeout(updatecounter, 1000);
    }
    updatecounter();
}

counter();
