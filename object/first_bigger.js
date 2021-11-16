// Enter code here 
let check = function(arr, num1, num2){
    let newArr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num1) {
            newArr1.push(arr[i])
        }    
    }
    // console.log(newArr1);
    let min1 = Infinity;
    for (let j = 0; j < newArr1.length; j++) {
       if (newArr1[j] < min1) {
           min1 = newArr1[j];
       }
    }
    console.log(min1);
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num2) {
            newArr2.push(arr[i])
        }    
    }
    // console.log(newArr2);
    let min2 = Infinity;
    for (let j = 0; j < newArr2.length; j++) {
       if (newArr2[j] < min2) {
           min2 = newArr2[j];
       }
    }
    console.log(min2);
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 1; i < lines[2]; i++) {
        let arr = lines[1].trim().split(" ").map(Number);
        let num1 = Number(lines[3]);
        let num2 = Number(lines[4]);
        // console.log(num1);
        // console.log(num2)
        // console.log(arr);
        check(arr, num1, num2);
    }
        
     
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`10
   13 89 81 66 81 63 71 76 73 81
   2
   65
   15`);
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
