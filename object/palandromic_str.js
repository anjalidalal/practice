let checkPalindrome = function (str) {
    let revStr = "";
    let maxLength = 0;
    for (let i = str.length-1; i >= 0; i--) {
        revStr += str[i];
        if (str[i] === revStr[i]) {
            // console.log(revStr.length)
            maxLength = Math.max(maxLength, revStr.length)
        }
    }
   console.log(maxLength)
}

let subString = function (str) {
   for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let newStr = "";
            for (let k = i; k <= j; k++) {
                newStr += str[k];
                (checkPalindrome(newStr))
            }
            // console.log(newStr)
        }
    }
}
const runProgram = (input) => {
    let str = input.trim().split("").join("");
    // console.log(str)
    subString(str)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`mom`);
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
