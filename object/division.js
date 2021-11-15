 const runProgram = (input) => {
    const num = Number(input);
    // console.log(num);
    let x = Math.floor(32 / num);
    if (x == 0) {
        console.log("Too Low");
    }
    else if (x < 0){
        console.log(-1)
    } else if (x === Infinity) {
        console.log(-1)
    }
    else{
        console.log(x);
    }   
 }
 
 if (process.env.USERNAME === "mansi") {
     runProgram(`4`);
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
 