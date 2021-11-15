//Enter code here 
const runProgram = (input) => {
    let nums = input.trim().split(" ").map(Number);
    let left = nums[0];
    let right = nums[1];

    for (let i = left; i <= right; i *= 2) {
        console.log(i)
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`4 20`);
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
