//Enter code here
const runProgram = (input) => {
    let lines = (input.trim().split(" "));
        console.log(lines)
        let a = lines[0].trim().split(" ").map(Number);
        let c = lines[1].trim().split(" ").map(String);
        let b = lines[2].trim().split(" ").map(Number);
        console.log(a, b, c);
        console.log(a)
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`2 * 3`);
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
