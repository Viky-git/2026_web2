// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let msgdata = "here is the data that i wanted to mention in my file by vikas"
fs.writeFile("./input.txt", msgdata, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(msgdata);
});

for (let i = 0; i < 10; i++) {
    console.log(i);
}