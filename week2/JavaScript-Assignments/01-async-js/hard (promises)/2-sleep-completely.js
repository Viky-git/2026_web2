/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let a =  new Promise((resolve) => {
        const start = Date.now();

        while (Date.now() - start < milliseconds) {
        }

        resolve();
    });

    return a;
}

// sleep(5000)

// console.log("This will run AFTER sleep finishes");

module.exports = sleep;
