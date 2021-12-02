let check = function(arr1, arr2){
    let common;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                common = arr1[i];
            }
        }
    }
    return common;
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr1 = lines[1].trim().split(" ").map(Number);
    let arr2 = lines[2].trim().split(" ").map(Number);
    console.log( check(arr1, arr2));
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
