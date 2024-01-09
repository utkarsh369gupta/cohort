// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



function clock24() {
    let currentdate = new Date();

    hh = currentdate.getHours();
    mm = currentdate.getMinutes();
    ss = currentdate.getSeconds();

    console.log(hh + '::' + mm + '::' + ss);
    setInterval(function () {
        if (mm >= 59 && ss >= 59) {
            hh++;
            ss = 0;
            mm = 0;
        }
        else if (ss >= 59) {
            mm++;
            ss = 0;
        }
        else {
            ss++;
        }

        console.log(hh + '::' + mm + '::' + ss);
    }, 1000);

}
clock24();

