 
 const runProgram = (input) => {
    let lines = (input.trim().split("\n"));
    let arr = lines[1].trim().split(" ").map(Number);
    let indexOftwo = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            indexOftwo = i;
        }
    }

    if (indexOftwo === -1 || indexOftwo === arr.length - 1) {
        console.log(-1)
    } else {
        console.log(arr[indexOftwo + 1])
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`5
   3 2 1 0 7
   `);
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
