// Lecture 1
// const path = require("path");

// console.log("Directory", __dirname)
// console.log("The File Name is " + path.basename(__filename))

// Exploring What Global Object is Providing
// for (let key in global) {
//     console.log(key)
// }

// Lecture 2

// Explore Arguments from Terminals
// uses this for Collecting Information from User Input

// console.log(process.argv)

// function grab(flag) {
//     let indeAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indeAfterFlag]
// }


// let greeting = grab("--greeting");
// let user = grab("--user");

// console.log(greeting)
// console.log(user)

// Lecture 3

// process.stdout.write("Hello \n");
// const questions = [
//     "What is your Name",
//     "What would you rather be doing",
//     "what is your preferred Programming Language"
// ];

// const answers = [];

// function ask(i = 0) {
//     process.stdout.write(`\n\n\n ${questions[i]}`)
//     process.stdout.write(' > ')
// }
// ask(answers.length);

// process.stdin.on("data", function (data) {
//     answers.push(data.toString().trim())
//     if (answers.length < questions.length) {
//         ask(answers.length)
//     }
//     else {
//         process.exit();
//     }
// })

// process.on("exit", function () {
//     process.stdout.write("\n ");
//     process.stdout.write(`\n  ${answers[0]} \n  ${answers[1]} \n  ${answers[2]} `)
// })

// Lecture 4 

const waitTime = 3000;
// console.log(`setting a ${waitTime / 1000} second delay!`);
const timerFinished = () => {
    clearInterval(interval)
    console.log(" done")
}

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("waiting.... " + percentage)

    // console.log(`waiting ${currentTime / 1000} seconds`)
}

const interval = setInterval(incTime, waitInterval)