//Enter code here 
let check = function(arr){
    for (let i = 0; i < arr.length; i++) {
        if (42 === arr[i]) {
           console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = lines[1].trim().split(" ").map(Number);
    console.log(arr);
        check(arr)
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`5
   3 7 42 9 8`);
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
