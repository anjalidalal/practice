//Enter code here 
const runProgram = (input) => {
    let nums = input.trim().split(" ").map(Number);
    let left = nums[0];
    let right = nums[1];
    let k = nums[2];
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (i % k == 0) {
            count++;
        }   
    }
    console.log(count);
}

if (process.env.USERNAME === "mansi") {
   runProgram(`1 10 1`);
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
