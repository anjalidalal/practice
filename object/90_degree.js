function rotate_arr(arr){
    for (let i = 0; i < arr[0].length; i++) {
        let newrow = [];
        for (let j = arr.length-1; j >= 0; j--) {
            newrow.push(arr[j][i])
        }
        console.log(newrow.join(" "))
    }
}


const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 1; i < lines.length; i++) {
        let arr = lines[1].trim().split(" ").map(Number)
        console.log(arr)
        rotate_arr(arr)
    }
}

if (process.env.USERNAME === "mansi") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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

