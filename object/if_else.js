let check = function(marks){
    if (marks == 100) {
        console.log("A");
    }
    else if (marks >= 90){
        console.log("B")
    }
    else if (marks >= 80){
        console.log("C")
    }  
    else{
        console.log("F");
    }   
} 
 const runProgram = (input) => {
      const marks = (input.trim().split(" ").map(Number));
      check(marks);
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`100`);
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
 