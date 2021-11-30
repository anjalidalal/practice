const runProgram = (input) => {
    let str = input.trim().split(" ");
    console.log(str);
    let newStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(str[i])
    }
    console.log(newStr.join(" "))
}

if (process.env.USERNAME === "mansi") {
   runProgram(`A Transformation in education`);
   
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
