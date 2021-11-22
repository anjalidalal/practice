let check = function(highestscore, score){
    if (score > highestscore) {
        console.log("Broken")
    }
    else if (score == highestscore) {
        console.log("Wao");
    }
    else {
        console.log("Not Yet");
    }
}
const runProgram = (input) => {
    let nums = input.trim().split(" ");
    let highestscore = Number(nums[0]);
    let score = Number(nums[1]);
    check(highestscore, score)
}

if (process.env.USERNAME === "mansi") {
   runProgram(`264 264`);
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
