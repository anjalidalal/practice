let check = function(num){
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
} 
 const runProgram = (input) => {
      const num = (input.trim().split(" ").map(Number));
      check(num);
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`7`);
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
 