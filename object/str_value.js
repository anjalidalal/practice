let check = function (str) {
    let alphabetes = 'abcdefghijklmnopqrstuvwxyz';
    let value = 0;
    for (let i = 0; i < str.length; i++) {
        value += (alphabetes.indexOf(str[i]) + 1)
    }
    console.log(value)
}

const runProgram = (input) => {
    let str = input.trim().split("");
    console.log(str)
    check(str);
}

if (process.env.USERNAME === "mansi") {
    runProgram(`aba`);
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
