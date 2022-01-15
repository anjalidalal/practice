function frequency(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] == 1) {
            console.log(key)
        }
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    
    for (let i = 2; i < lines.length; i+=2) {
        let arr = lines[i].trim().split(" ").map(Number);
        frequency(arr);
    }
  
}

if (process.env.USERNAME === "mansi") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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
