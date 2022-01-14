function weightedSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * (i + 1);
    }
    console.log(sum)
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");

    for (let i = 2; i < lines.length; i+=2) {
        let arr = lines[i].trim().split(" ").map(Number)
        weightedSum(arr)
    }
}

if (process.env.USERNAME === "mansi") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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

