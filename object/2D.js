let arr = [
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12]
];
let r = 4;
let c = 3;
for (let i = 0; i < c; i++) {
   for (let j = r-1; j >= 0; j--) {
       console.log(arr[j][i]);       
   } 

} 
// const runProgram = (input) => {
//     let lines = input.trim().split("\n");
    
// }

// if (process.env.USERNAME === "mansi") {
//    runProgram(`4 3
//    1 8 9
//    2 7 10
//    3 6 11
//    4 5 12`);
// } else {
//    process.stdin.resume();
//    process.stdin.setEncoding("ascii");
//    let read = "";
//    process.stdin.on("data", function (input) {
//        read += input;
//    });
//    process.stdin.on("end", function () {
//        read = read.replace(/\n$/, "");
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//    });
//    process.on("SIGINT", function () {
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//        process.exit(0);
//    });
// }
