function checkCount(newStr) {
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[0] === newStr.length-1) {
            return true;
        }
    }
    return false
}
let check = function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let newStr = "";
            for (let k = i; k <= j; k++) {
                newStr += str[k]
            }
            console.log(newStr)
            if (checkCount(newStr)) {
                count++
            }   
        }
    } 
    console.log(count)
}
const runProgram = (input) => {
    let str = input.trim().split(" ").join(" ");
    console.log(str)
    check(str)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`abcab`);
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