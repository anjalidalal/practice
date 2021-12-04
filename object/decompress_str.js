let decompressStr = function (str) {
    let newStr = "";
    for (let i = 0; i < str.length; i+=2) {
        let char = str[i];
        let int = str[i+1];
        for (let j = 0; j < int; j++) {
            newStr += char;
        }
        
    }
    console.log(newStr)
}
const runProgram = (input) => {
    let str = input.trim().split("").join("");
    decompressStr(str)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`a3b2`);
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
