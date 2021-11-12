const runProgram = (input) => {
    const arr = (input.trim().split(" ").map(Number));
    console.log(arr)
    console.log((arr[0]*1) + (arr[1]*2) + (arr[2]*3) + (arr[3]*3) + (arr[4]*2) + (arr[5]*2));
}

if (process.env.USERNAME === "mansi") {
     runProgram(`1 2 3 4 5 6`);
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
 