function traverse2D(newArr) {
    let newRow = [];
    for (let i = newArr[0].length-1; i >= 0; i--) {
       for (let j = 0; j < newArr.length; j++) {
           newRow.push(newArr[j][i]);       
       } 
    }    
    console.log(newRow.join(" "))
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let newArr = [];
    for (let i = 1; i < lines.length; i++) {
        let arr = lines[i].trim().split(" ").map(Number);
        newArr.push(arr);
    }
    traverse2D(newArr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`4 3
   1 8 9
   2 7 10
   3 6 11
   4 5 12`);
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
