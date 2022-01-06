function zigzagArr(newArr) {
    let newRow = [];
    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 == 0) {
            for (let j = newArr[0].length-1; j >= 0; j--) {
                newRow.push(newArr[i][j])
            }
        }
        else if (i % 2 !== 0) {
            for (let k = 0; k < newArr[0].length; k++) {
                newRow.push(newArr[i][k])
            }
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
    zigzagArr(newArr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`6 5
    9 5 6 4 5
    4 1 8 7 7
    8 4 9 1 6
    5 7 3 2 4
    1 7 9 9 4
    9 9 2 9 2`);
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
