let check = function(num){
    if (num % 3 == 0) {
        console.log("yes");
    }  
    else{
        console.log("no");
    }   
} 
 const runProgram = (input) => {
      const num = (input.trim().split(" ").map(Number));
      check(num);
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`30`);
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
 