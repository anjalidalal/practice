function maxElement(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1;
        }
        else {
            obj[str[i]] = 1;
        }
    }
    console.log(obj);
    for (let key in obj) {
        console.log(`${key}-${obj[key]}`)
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let str = lines[1].trim();
    console.log(str);

    maxElement(str)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`4
    aman`);
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

