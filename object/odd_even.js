//Enter code here 
const runProgram = (input) => {
    let lines = input.trim().split("\n");

    const arr = lines[1].trim().split(" ").map(Number);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
           evenSum += arr[i];
        } 
        else{
            oddSum += arr[i];
        } 
        
    }
    if ( oddSum > evenSum) {
        console.log("Odd")
    }
    else{
        console.log("Even")
    }
}

if (process.env.USERNAME === "mansi") {
   runProgram(`4
   1 2 3 4`);
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
