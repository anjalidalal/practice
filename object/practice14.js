let check = function(num){
   if (num % 2 == 0) {
        console.log("Even");
   }  
   else{
       console.log("Odd");
   }   
} 
const runProgram = (input) => {
     const num = (input.trim().split(" ").map(Number));
     check(num);
}

if (process.env.USERNAME === "mansi") {
    runProgram(`3`);
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
