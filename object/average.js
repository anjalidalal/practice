//Enter code here 
const runProgram = (input) => {
    let lines = input.trim().split("\n");

    const arr = lines[1].trim().split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];   
    }
    console.log(sum/arr.length);
}

if (process.env.USERNAME === "mansi") {
   runProgram(`4
   2 5 0 9`);
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
