let checkIsIncreasing = function(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i+1]) {
            return false;
        }
    }
    return true;
}
let check = function (arr) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = i; j < arr.length; j++) {
            let newArr = [];
           for (let k = i; k <= j; k++) {
             newArr.push(arr[k]);
           }
           if (checkIsIncreasing(newArr)) {
               maxLength = Math.max(maxLength, newArr.length)
           }
        }
        
    }
    return maxLength;
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 2; i < lines.length; i += 2) {
        let arr = lines[i].trim().split(" ").map(Number);
        // console.log(arr);
       console.log(check(arr))
    }
}

if (process.env.USERNAME === "mansi") {
    runProgram(`2
   2
   1 1
   6
   1 2 1 2 3 1`);
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
