function rotated_arr(newArr) {
    for (let i = newArr.length - 1; i >= 0; i--) {
        let newRow = [];
        for (let j = 0; j < newArr[0].length; j++) {
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
    rotated_arr(newArr)
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

