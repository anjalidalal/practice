 
 const runProgram = (input) => {
      let arr = (input.trim().split(" ").map(Number));
      let fuel = arr[0]
      let distance = arr[1]
      let reguiredFuel = (fuel * distance);
    if (reguiredFuel > 50) {
        console.log("Enough");
    }
    else{
        console.log("Go On");
    }  
      
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`1 46`);
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
 