//Enter code here 
let check = function(arr){
    let newArr = [];
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    let element;
    for (let j = 0; j < arr.length; j++) {
        element = product/arr[j]; 
        newArr.push(element);  
    }
    console.log(newArr.join(" "))
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 2; i < lines.length; i+=2) {
        let arr = lines[i].trim().split(" ").map(Number)
        check(arr)
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`2
   5
   1 2 3 4 5
   3
   3 2 7
   `);
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
