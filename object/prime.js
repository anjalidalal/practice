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
    let num = Number(input);
    check(num)
}

if (process.env.USERNAME === "mansi") {
   runProgram(`13`);
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
