function check(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 85) {
            console.log("Enter")
        }
        else {
            console.log("Beep")
        }
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = lines[1].trim().split(" ").map(Number);
    // console.log(arr);

    check(arr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`5
    24 83 89 43 91`);
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

