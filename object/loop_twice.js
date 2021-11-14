//Enter code here
 const runProgram = (input) => {
      let arr = (input.trim().split(" ").map(Number));
      let num1 = arr[0];
      let num2 = arr[1];
      for (let i = num1; i <= num2; i+=2) {
          console.log(i);
      }
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`4 10`);
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
 