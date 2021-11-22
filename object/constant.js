const runProgram = (input) => {
    let line = input.trim();
    let str = String(line);
    console.log(str);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
            count++;
        }
    }
    console.log(count);
    
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
