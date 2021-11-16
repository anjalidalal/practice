//Enter code here 
let print = function(arr){
    let str = "";
    for (let i = 1; i <= 10; i++) {
        str += arr * i + " ";
        
    }
    console.log(str);
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 1; i < lines.length; i++) {
        let arr = lines[i].trim().split(" ").map(Number);
        print(arr)
    }
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`2
   2
   3`);
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
