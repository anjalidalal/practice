let check = function(num){
    let product = 1;
    for(let i = 0; i < num.length; i++) {
        product *= num[i];
    }
    return product;
} 
 const runProgram = (input) => {
      const num = (input.trim().split(" ").map(Number));
      console.log(check(num));
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`16 9 17 10 10 8`);
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
 