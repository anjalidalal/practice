const runProgram = (input) => {
    const arr = (input.trim().split(" ").map(Number));
    console.log(arr)
    console.log((arr[0] + arr[1]) * (arr[2] + arr[3] +arr[4]));
}

if (process.env.USERNAME === "mansi") {
     runProgram(`85 45 83 28 96`);
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
 