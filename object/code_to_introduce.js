let check = function(N, G){
    if (G == 'M') {
        console.log("Hello Mr." + " " + N);
    }
    else if (G == 'F'){
        console.log("Hello Mrs." + " "  + N);
    }
}

const runProgram = (input) => {
    let lines = (input.trim().split(" ").map(String));
    let firstName = lines[0];
    let gender = lines[1];
//    console.log(firstName, gender);
   check(firstName, gender)
}

if (process.env.USERNAME === "mansi") {
   runProgram(`Prateek M`);
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
