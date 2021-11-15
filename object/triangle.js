//Enter code here 
let check = function(arr){
    for (let i = 0; i < arr.length; i++) {
        if ((arr[0] + arr[1] > arr[2]) && (arr[1] + arr[2] > arr[0]) && (arr[0] + arr[2] > arr[1])) {
           console.log("Yes");
        }
        else{
            console.log("No");
        }
        break;
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 1; i < lines.length; i++) {
        let arr = lines[i].trim().split(" ").map(Number);
        check(arr);
    }
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`4
   4 5 13
   7 1 8
   2 5 4
   2 2 2`);
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
