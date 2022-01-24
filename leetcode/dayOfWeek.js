// Day of the Week Ended
// Description

// Given the current day, and a number N, find what day will it be after N days.

// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}


// Input
// The first line of the input contains the name of the current day.

// The second line of the input contains N.

// Constraints

// 1 <= N <= 1000


// Output
// Print the name of the day, which will occur after N days.


// Sample Input 1 

// Wednesday
// 8
// Sample Output 1

// Thursday
// Hint

// In the sample test case, the current day is Wednesday. After N = 8 days, it will be Thursday.

function dayOfWeek(date, day) {
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let indexOfToday = arr.indexOf(day);

    let presentDay = (date % 7) + indexOfToday;
    while (presentDay >= 7) {
        presentDay = presentDay % 7;
    }
    return arr[presentDay];
}


const runProgram = (input) => {
    let lines = (input.trim().split("\n"));
    let day = lines[0].trim();
    let date = Number(lines[1]);
    console.log(dayOfWeek(date, day))
}

if (process.env.USERNAME === "mansi") {
    runProgram(`Friday
    150`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

