let checkCount = function(targetArr, arr){
   
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 1; j < arr.length; j++) {
           for (let k = 0; k < targetArr.length; k++) {
            if (arr[i] + arr[j] == targetArr[k]){
                count++;
             }
           }
        }
        return count;
    }
   
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 0; i < lines.length; i++) {
        let targetArr = lines[0].trim().split(" ").map(Number);
        let arr = lines[1].trim().split(" ").map(Number);
        // console.log(targetArr, arr);
        console.log(checkCount(targetArr, arr))
        break;
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`5 0
   -1 1 -1 1 -1`);
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
