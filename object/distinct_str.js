function distinctStr(str) {
    let count = 0;
   for (let i = 0; i < str.length; i++) {
       for (let j = i; j < str.length; j++) {
           let newStr = "";
           for (let k = i; k <= j; k++) {
               newStr += str[k]
           }
           if(checkDistinct(newStr)){
              count++;
           }
       }
   }
   console.log(count)
}
function checkDistinct(newStr) {
    let obj = {}
    for (let i = 0; i < newStr.length; i++) {
        if (obj[newStr[i]]) {
            obj[newStr[i]] = obj[newStr[i]] + 1;
        }
        else{
            obj[newStr[i]] = 1;
        }
    }
    for (let key in obj) {
       if (obj[key] > 1) {
           return false;
       }
    }
    return true;
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");

    for (let i = 2; i < lines.length; i+=2) {
        let str = lines[i].trim()
        distinctStr(str)
    }
}

if (process.env.USERNAME === "mansi") {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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