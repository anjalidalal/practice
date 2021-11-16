//Enter code here 
const runProgram = (input) => {
    let num = input.trim().split(" ").map(Number);
    for (let i = 1; i <= num; i++) {
        let res = "";
        for (let j = 1; j <= num; j++) {
            res += (i * j) + " "
        }
        console.log(res)
    }
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`4`);
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
