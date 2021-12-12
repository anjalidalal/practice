let check = function(str){
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let newStr = "";
            for (let k = i; k <= j; k++) {
                newStr += str[k];
            }
            console.log(newStr)
        }
    }
}

const runProgram = (input) => {
    let lines = (input.trim().split("\n"));
    for (let i = 1; i < lines.length; i+=2) {
        let str = lines[2].trim();
        // console.log(str);
        check(str);
        break;
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`1
   4
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
