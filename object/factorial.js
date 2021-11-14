//Enter code here 
const runProgram = (input) => {
    let num = input.trim().split(" ").map(Number);
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(fact); 
}

if (process.env.USERNAME === "mansi") {
   runProgram(`5`);
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
