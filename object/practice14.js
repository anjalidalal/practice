let sum = function(num){
     let s = 0;
     for (let i = 0; i <= num; i++) {
          s += i; 
     }
     return s;
} 
const runProgram = (input) => {
     const num = (input.trim().split(" ").map(Number));
     console.log(sum(num));
}

if (process.env.USERNAME === "mansi") {
    runProgram(`3`);
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
