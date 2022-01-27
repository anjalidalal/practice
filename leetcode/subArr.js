// All thrice except One Ended
// Description

// Given an array of integers, every element appears thrice except for one which occurs once. Find that element that does not appear thrice.



// Note: Your algorithm should have a linear runtime complexity and without using extra memory


// Input
// Input Format:

// The first line of input will contain an integer T, denoting the number of test cases.
// The first line of each test case will contain an integer N, denoting the size of the array
// The next line will contain N integers denoting the array elements, A[0], A[1], A[2].....A[N-1]

// Constraints:

// 1<= T <=10

// 1<= N <=5*10^5

// 1<= A[i] <= 10^9


// Output
// For each test case, output the element which does not occur thrice in the array, in a new line.


// Sample Input 1 

// 1
// 7
// 1 3 1 3 1 2 3
// Sample Output 1

// 2
// Hint

// In Sample 1:
// N = 7

// Array: 1 3 1 3 1 2 3

// Only 2 is the number present in the array which does not occur 3 times, So the output is 2

function maxElement(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    for (let key in obj) {
       if (obj[key] !== 3) {
           console.log(Number(key))
       }
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 2; i < lines.length; i+=2) {
        let arr = lines[i].trim().split(" ").map(Number);
        maxElement(arr);
    }
}

if (process.env.USERNAME === "mansi") {
    runProgram(`3
    16
    2 3 4 5 6 1 6 5 4 3 2 2 3 4 5 6
    37
    1 2 3 4 5 6 8 9 10 11 12 13 7 13 12 11 10 9 8 6 5 4 3 2 1 1 2 3 4 5 6 8 9 10 11 12 13
    25
    1 2 3 4 5 6 7 9 8 9 7 6 5 4 3 2 1 1 2 3 4 5 6 7 9`);
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

