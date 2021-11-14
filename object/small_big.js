const runProgram = (input) => {
    let lines = input.trim().split("\n");
    const arr = lines[1].trim().split(" ").map(Number);
    let min = Infinity;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        else if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
    console.log(max);
}

if (process.env.USERNAME === "mansi") {
     runProgram(`4
     -2 0 8 4`);
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
 