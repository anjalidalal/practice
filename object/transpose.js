function transpose_arr(newArr) {
    for (let i = 0; i < newArr[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < newArr.length; j++) {
            newRow.push(newArr[j][i])
        }
        console.log(newRow.join(" "))
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let newArr = [];
    for (let i = 1; i < lines.length; i++) {
        let arr = lines[i].trim().split(" ").map(Number);
        newArr.push(arr);
    }
    transpose_arr(newArr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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

