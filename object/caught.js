let check = function(str){
    for (let i = 0; i < str.length; i++) {
        if (str[i] = '420'){
            console.log("C")
        }
        else {
            console.log("E");
        }
    }
}
const runProgram = (input) => {
    let line = input.trim();
    let str = String(line);
    console.log(str)
    check(str);

}

if (process.env.USERNAME === "mansi") {
   runProgram(`masaischool`);
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
