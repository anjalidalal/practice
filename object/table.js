//Enter code here
let check = function(num){
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
} 
 const runProgram = (input) => {
      const num = (input.trim().split(" ").map(Number));
      check(num);
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`2`);
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
 