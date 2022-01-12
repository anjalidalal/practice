function oddSum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let newRow = [];
            for (let k = i; k <= j; k++) {
                newRow.push(arr[k])
            }
            if (oddSumCount(newRow)) {
                count++;
            }
        }
    }
    console.log(count);
}
function oddSumCount(newRow) {
    let sum = 0;
    for (let i = 0; i < newRow.length; i++) {
        sum += newRow[i];
    }
    if (sum % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = lines[1].trim().split(" ").map(Number);
    // console.log(arr)
    oddSum(arr);
}

if (process.env.USERNAME === "mansi") {
    runProgram(`8
    9 6 9 0 5 4 -8 -9`);
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
