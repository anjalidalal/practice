const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let obj = {}
    for (let i = 1; i < lines.length; i++) {
        // console.log(lines[i].trim(" "));
        if (obj[lines[i]]) {
            obj[lines[i]] = obj[lines[i]] + 1;
        }
        else{
            obj[lines[i]] = 1;
        }
    }
    // console.log(obj);
    let max = 0;
    let newKey = "";
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            newKey = key;
        }
    }
    console.log(newKey.trim())
}

if (process.env.USERNAME === "mansi") {
   runProgram(`5
   A
   ABA
   ABA
   A
   A`);
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
