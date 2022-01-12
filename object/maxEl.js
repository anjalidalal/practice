function maxElement(arr) {
    let obj = {};
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    // console.log(obj);
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            console.log(key)
        }
    }
    // console.log(max)
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = lines[1].trim().split(" ").map(Number);
    // console.log(arr);

    maxElement(arr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`5
    0 2 0 6 9`);
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

