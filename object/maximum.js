const runProgram = (input) => {
    const lines = (input.trim().split(" ").map(Number));
    let a = lines[0];
    let b = lines[1];
    let c = lines[2];
    let max = lines[0]
    for (let i = 0; i < lines.length; i++) {
        if (max < lines[i]) {
            max = lines[i]
        }
    }
    console.log(max);
}

if (process.env.USERNAME === "mansi") {
     runProgram(`72 914 355`);
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
 