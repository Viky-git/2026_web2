// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let ss = 57;
let mm = 59;
let hh24 = 23;
let hh12 = 11;
let timeflag = "AM"


function Clock24() {
    ss++;

    if ( ss==60 ) {
        ss = 0;
        mm += 1;
    }

    if ( mm==60 ) {
        mm = 0;
        hh24 += 1;
        hh12 += 1;
    }

    if( hh12==12 ) {
        hh12 = 0;
        timeflag = "PM"
    }

    if( hh24==24 ) {
        hh24 = 0;
        timeflag = "AM"
    }

    console.log(`24 Clock : ${hh24} : ${mm} :: ${ss}`);
    console.log(`12 Clock : ${hh12} : ${mm} :: ${ss} ${timeflag}`);
    console.log(`-----------------------------------`);

}

let clock = () => {
    setInterval(Clock24, 1000);
}

clock();

module.exports = clock;
