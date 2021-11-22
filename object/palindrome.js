let check = function(arr, revArr){
    var isPalindrome = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== revArr[i]) {
            isPalindrome = false;
        }  
    }
    if (isPalindrome) {
        console.log("YES");
    }
    else{
        console.log("NO");
    }   
}

const runProgram = (input) => {
    let arr = input.trim().split("").map(Number);
    console.log(arr);
    let revArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    console.log(revArr);
    check(arr, revArr);
}

if (process.env.USERNAME === "mansi") {
   runProgram(`1221`);
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
