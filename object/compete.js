let countCheck = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > arr[i] && arr[i-1] < arr[i] && arr[i] > arr[i+1] && arr.length-1 > arr[i]) {
            count++
        }
    }
    console.log(count)
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = lines[1].trim().split(" ").map(Number);
    // console.log(arr)
    countCheck(arr)
}

if (process.env.USERNAME === "mansi") {
   runProgram(`5
   8 0 -2 1 -4`);
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
