// Count such pairs Ended
// Description

// You are given an array A of N integers along with a target integer. Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.


// Input
// Input Format :

// First line contains 2 integers: N and the target respectively.

// Second line contains N integers which are the elements of the array.

// Constraints :

// N<100


// Output
// Print one number which is number of such pairs.


// Sample Input 1 

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2

let checkCount = function (target, arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] + arr[j] === target) {
                count++;
            }  
        }
    }
    return count;

}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 0; i < lines.length; i++) {
        let targetArr = lines[0].trim().split(" ").map(Number);
        let arr = lines[1].trim().split(" ").map(Number);
        let target = targetArr[1]
        console.log(checkCount(target, arr))
        break;
    }
}

if (process.env.USERNAME === "mansi") {
    runProgram(`5 9
    3 0 6 2 7`);
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
