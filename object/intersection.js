let check = function(num){
    var isPalindrome = true;
    let isPrime = false
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = true;
        }   
    }
    if (isPrime) {
        console.log("No")
    } 
    else{
        console.log("Yes");
    }
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 1; i < lines.length; i++) {
        let arr = lines[i].trim().split(" ").map(Number);
        console.log(arr);
        // check(arr);
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`3
   4 5 7
   9 2 5`);
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
