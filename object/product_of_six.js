let check = function(num){
    let product = 1;
    for(let i = 1; i <= num.length; i++) {
        product *= i;
    }
    return product;
} 
 const runProgram = (input) => {
      const num = (input.trim().split(" ").map(Number));
      console.log(check(num));
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`1 2 3 4 5 6 `);
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
 